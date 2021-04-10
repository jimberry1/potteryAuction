import * as React from 'react';
import { useState, useEffect } from 'react';
import ArtWithSectionsAndPrice from '../../components/tailwindComponents/artWithSectionsAndPrice';
import { artworkAuctionType } from '../../types';
import {
  addViewToArtworkWhenLoaded,
  fetchArtworkByArtworkId,
  fetchArtworkSnapshotByArtworkId,
  updateArtworkAsSoldForArtworkId,
} from '../../utilities/firebaseQueries';
import { redirectToArtistPage } from '../../utilities/redirectFunctions';
import { useHistory } from 'react-router';
import PageLoaderHoc from '../../utilities/hoc/pageLoaderHoc';
import { useDispatch, useSelector } from 'react-redux';
import { userIdStateSelector } from '../../store/storeUtilities';
import { toggleAuthenticationContainer } from '../../store/actions/adminActions';

export interface ArtContainerProps {
  artworkId: string;
}

const ArtContainer: React.SFC<ArtContainerProps> = ({ artworkId }) => {
  const history = useHistory();
  const userId = useSelector(userIdStateSelector);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [artwork, setArtwork] = useState<artworkAuctionType>({
    artistId: '',
    artistUserId: '',
    buyerId: '',
    timestamp: null,
    // artwork info
    title: '',
    description: '',
    artCategory: '',
    artMaterials: [''],
    views: 0,
    photosURL: [''],
    size: '',
    // Artist info
    artistName: '',
    artistDescription: '',
    // Charity info
    charityName: '',
    charityDescription: '',
    charityURL: '',
    // auction info
    price: -1,
    sold: false,
    auctionType: '',
  });

  useEffect(() => {
    if (artworkId) {
      fetchArtworkByArtworkId(artworkId)
        //   .catch((err) => console.log(err))
        .then((artworkSnapshot: any) => {
          console.log('artwork fetched successfully');
          if (artworkSnapshot.exists) {
            setArtwork(artworkSnapshot.data());
          }
          setLoading(false); // If no artwork is found then this will cause the page to load forever
        });
      fetchArtworkSnapshotByArtworkId(artworkId, setArtwork);
    }
  }, [artworkId]);

  useEffect(() => {
    if (artworkId) {
      addViewToArtworkWhenLoaded(artworkId);
    }
  }, [artworkId]);

  const artistClickedHandlerInvoked = (artistId: string) => {
    history.push(redirectToArtistPage(artistId));
  };

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

    if (artwork.sold) {
      console.log('This item has already been sold!');
      return;
    }

    // Should move these into a combined handler and maybe consider only having 1 sold boolean? What are the implications of it being non-matching?
    updateArtworkAsSoldForArtworkId(artworkId, userId);
  };

  return (
    <div>
      <PageLoaderHoc loading={loading}>
        <ArtWithSectionsAndPrice
          artwork={artwork}
          artistClicked={(artistId: string) =>
            artistClickedHandlerInvoked(artistId)
          }
          buyClicked={purchaseItemHandler}
          userId={userId}
        />
      </PageLoaderHoc>
    </div>
  );
};

export default ArtContainer;
