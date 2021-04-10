import * as React from 'react';
import { useState, useEffect } from 'react';
import ArtResultsSet from '../../components/artResultsSet';
import { artworkAuctionType, completedAuctionType } from '../../types';
import { fetchSoldArtworksByBuyerIdWithLimit } from '../../utilities/firebaseQueries';
export interface PurchasedItemsContainerProps {
  userId: string;
}

interface completedAuctionState {
  id: string;
  data: artworkAuctionType;
}

const PurchasedItemsContainer: React.SFC<PurchasedItemsContainerProps> = ({
  userId,
}) => {
  const [completedAuctionRecords, setCompletedAuctionRecords] = useState<
    completedAuctionState[]
  >([]);

  useEffect(() => {
    fetchSoldArtworksByBuyerIdWithLimit(userId, 10).then(
      (purchasedItemsSnapshot: any) => {
        setCompletedAuctionRecords(
          purchasedItemsSnapshot.docs.map((purchasedItem: any) => ({
            id: purchasedItem.id,
            data: purchasedItem.data(),
          }))
        );
      }
    );
  }, [userId]);
  return (
    <div>
      {completedAuctionRecords && (
        <ArtResultsSet
          artworks={completedAuctionRecords}
          title="Purchased items"
        />
      )}
    </div>
  );
};

export default PurchasedItemsContainer;
