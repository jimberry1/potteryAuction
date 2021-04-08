import * as React from 'react';
import { useState, useEffect } from 'react';
import { auctionType } from '../../types';
import {
  createCompletedAuctionRecord,
  fetchAuctionReferenceByAuctionIdForSnapshot,
  updateArtworkAsSoldForArtworkId,
  updateAuctionAsSoldForArtworkId,
} from '../../utilities/firebaseQueries';
import Firebase from 'firebase';
import BasicAuctionComponent from '../../components/auction/basicAuctionComponent';
import { useIsUserAuthenicated } from '../../utilities/validation/userAuthenticationValidation';
import { useAuthenticateToggle } from '../../utilities/customHooks/authenicateUser';
import { useDispatch, useSelector } from 'react-redux';
import { userIdStateSelector } from '../../store/storeUtilities';
import { toggleAuthenticationContainer } from '../../store/actions/adminActions';
export interface AuctionContainerProps {
  auctionId: string;
}

interface auctionState {
  data: auctionType;
  id: string;
}

/**
 * This container takes an auction id and loads the information corresponding to the auction.
 * The information is then displayed for now using a standard auction component.
 */
const AuctionContainer: React.FunctionComponent<AuctionContainerProps> = ({
  auctionId,
}) => {
  const userId = useSelector(userIdStateSelector);
  const dispatch = useDispatch();
  const [auction, setAuction] = useState<auctionState>({
    id: '',
    data: {
      artworkId: '',
      artistId: '',
      minimumPrice: 0,
      currentBid: 0,
      standardPrice: 0,
      auctionType: '',
      sold: false,
      startTimestamp: null,
      endTimestamp: null,
      timestamp: null,
    },
  });

  useEffect(() => {
    fetchAuctionReferenceByAuctionIdForSnapshot(auctionId, setAuction);
  }, [auctionId]);

  /**
   * Handles a user placing a bid on an item. This is a two part process
   * 1) Adds a bid record into the sub-collection of the item to track all bids made by customers
   * 2) Updates the item in question with a new price.
   * 3) Notify the user that their bid was successful - might make sense to have currentBidder field on the item - that way we can change the styling
   */
  const newBidHandler = () => {};

  /**
   * Handles the purchase of an item. This is a lot simpler than implementing bids
   * 1) Updates the record to show that it has been sold
   * 2) Somehow notifies the artist that they have sold a pot
   * 2) Notifies the user that they have been successful in their purchase
   *
   * Potentially this could be handled by a new database table for completedAuctions which manages the payment for the item.
   *
   * Validation
   * -- user is authenticated
   * -- auctionId is not null
   */
  const purchaseItemHandler = () => {
    // Should move the below validation into a seperate function
    if (!userId) {
      return dispatch(toggleAuthenticationContainer(true));
    }
    if (!auctionId && auction.id === auctionId) {
      console.log(
        'You are trying to purchase an item that does not have a valid auction Id'
      );
      return;
    }
    if (auction.data.sold) {
      console.log('This item has already been sold!');
      return;
    }

    // Should move these into a combined handler and maybe consider only having 1 sold boolean? What are the implications of it being non-matching?
    updateArtworkAsSoldForArtworkId(auction.data.artworkId);
    updateAuctionAsSoldForArtworkId(auctionId);
    createCompletedAuctionRecord(userId, auction.id, auction.data);
  };

  return (
    <div onClick={purchaseItemHandler}>
      {auction.id && <BasicAuctionComponent auction={auction.data} />}
    </div>
  );
};

export default AuctionContainer;
