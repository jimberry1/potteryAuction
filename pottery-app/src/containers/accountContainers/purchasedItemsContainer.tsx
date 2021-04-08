import * as React from 'react';
import { useState, useEffect } from 'react';
import { completedAuctionType } from '../../types';
import { fetchCompletedAuctionsForPurchaserWithLimit } from '../../utilities/firebaseQueries';
export interface PurchasedItemsContainerProps {
  userId: string;
}

interface completedAuctionState {
  id: string;
  data: completedAuctionType;
}

const PurchasedItemsContainer: React.SFC<PurchasedItemsContainerProps> = ({
  userId,
}) => {
  const [completedAuctionRecords, setCompletedAuctionRecords] = useState<
    completedAuctionState[]
  >([]);

  useEffect(() => {
    fetchCompletedAuctionsForPurchaserWithLimit(userId, 10).then(
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
      {completedAuctionRecords &&
        completedAuctionRecords.map((item) => {
          return (
            <div className="flex p-4 mt-2" key={item.id}>
              {item.data.artworkId}
            </div>
          );
        })}
    </div>
  );
};

export default PurchasedItemsContainer;
