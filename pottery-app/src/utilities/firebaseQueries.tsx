import db from '../firebase';
import {
  artistType,
  artworkAuctionType,
  searchStateType,
  userType,
  userTypeForUpdating,
} from '../types';
import {
  ARTIST_TABLE,
  ARTWORK_TABLE,
  AUCTION_TABLE,
  CHARITIES_TABLE,
  COMPLETED_AUCTION_TABLE,
  FIREBASE_GENERAL_INFO_TABLE,
  USER_TABLE,
} from './firebaseQueryConfig';
import Firebase from 'firebase';
import { ART_MATERIALS } from '../configuration/staticVariableNames/databaseTableAndFieldNames';
import {
  ARTIST_ID,
  BUYER_ID,
  CHARITY,
  IS_APPROVED,
} from '../configuration/staticVariableNames/artPageTabAndFieldNames';

export const fetchGeneralInfoTableByDocumentId = async (documentId: string) => {
  return await db.collection(FIREBASE_GENERAL_INFO_TABLE).doc(documentId).get();
};

export const addArtworkToArtworkDatabaseTable = async (
  artwork: artworkAuctionType
) => {
  return await db.collection(ARTWORK_TABLE).add(artwork);
};

export const fetchArtworkByArtworkId = async (artworkId: string) => {
  return await db.collection(ARTWORK_TABLE).doc(artworkId).get();
};

export const fetchArtworksForArtistIdWithLimit = async (
  artistId: string,
  limit: number
) => {
  return await db
    .collection(ARTWORK_TABLE)
    .where(ARTIST_ID, '==', artistId)
    .limit(limit)
    .get();
};

export const fetchArtworkSnapshotByArtworkId = async (
  artworkId: string,
  setStateCallback: any
) => {
  return await db
    .collection(ARTWORK_TABLE)
    .doc(artworkId)
    .onSnapshot((snapshot) => {
      if (snapshot.exists) {
        setStateCallback(snapshot.data());
      }
    });
};

export const fetchSoldArtworksByBuyerIdWithLimit = async (
  buyerId: string,
  limit: number
) => {
  return await db
    .collection(ARTWORK_TABLE)
    .where(BUYER_ID, '==', buyerId)
    .limit(limit)
    .get();
};
export const addViewToArtworkWhenLoaded = (artworkId: string) => {
  db.collection(ARTWORK_TABLE)
    .doc(artworkId)
    .update({ views: Firebase.firestore.FieldValue.increment(1) })
    .catch((err) => console.log(err));
};

export const addArtistToFirebase = async (artist: artistType) => {
  return await db.collection(ARTIST_TABLE).add({
    ...artist,
    timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const addArtistToFirebaseAndUpdateUserWithArtistId = async (
  artist: artistType,
  userId: string
) => {
  return await db
    .collection(ARTIST_TABLE)
    .add({
      ...artist,
      timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((artistId) => {
      updateUserWithArtistIdWhenCreatingArtistProfile(userId, artistId.id);
      return artistId.id;
    });
};

export const fetchArtistByArtistId = async (artistId: string) => {
  return await db.collection(ARTIST_TABLE).doc(artistId).get();
};

export const fetchArtistsWithLimit = async (limit: number) => {
  return await db
    .collection(ARTIST_TABLE)
    .where(IS_APPROVED, '==', true)
    .limit(limit)
    .get();
};

export const fetchArtistProfilesPendingApproval = async () => {
  return await db
    .collection(ARTIST_TABLE)
    .where(IS_APPROVED, '==', false)
    .get();
};

export const fetchArtistProfilesPendingApprovalSnapshot = async (
  setStateCallback: any
) => {
  return await db
    .collection(ARTIST_TABLE)
    .where(IS_APPROVED, '==', false)
    .onSnapshot((unapprovedArtists) => {
      setStateCallback(
        unapprovedArtists.docs.map((unapprovedArtist) => ({
          id: unapprovedArtist.id,
          data: unapprovedArtist.data(),
        }))
      );
    });
};

export const fetchUserByUserId = async (userId: string) => {
  return await db.collection(USER_TABLE).doc(userId).get();
};

export const fetchCompletedAuctionById = async (completedAuctionId: string) => {
  return await db
    .collection(COMPLETED_AUCTION_TABLE)
    .doc(completedAuctionId)
    .get();
};

export const fetchCompletedAuctionsForArtistWithLimit = async (
  artistId: string,
  limit: number
) => {
  return await db
    .collection(COMPLETED_AUCTION_TABLE)
    .where(ARTIST_ID, '==', artistId)
    .limit(limit)
    .get();
};

export const fetchCharitiesWithLimit = async (limit: number) => {
  return await db.collection(CHARITIES_TABLE).limit(limit).get();
};

/**
 * Updates an item as sold by setting the sold boolean to true and setting the buyerId as the buyer's userId
 * @param artworkId
 * @param userId
 */
export const updateArtworkAsSoldForArtworkId = async (
  artworkId: string,
  userId: string
) => {
  db.collection(ARTWORK_TABLE)
    .doc(artworkId)
    .update({ sold: true, buyerId: userId });
};

export const updateArtistProfileAsActiveForArtistId = async (
  artistId: string
) => {
  return await db
    .collection(ARTIST_TABLE)
    .doc(artistId)
    .update({ isApproved: true });
};

export const updateArtistProfileWithSuspendedValueForArtistId = async (
  artistId: string,
  isSuspended: boolean
) => {
  return await db
    .collection(ARTIST_TABLE)
    .doc(artistId)
    .update({ isSuspended: isSuspended });
};

export const addUserToUsers = async (user: userType) => {
  return db.collection(USER_TABLE).add({
    ...user,
    timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const updateUserInformationForUserId = async (
  userId: string,
  user: userTypeForUpdating | userType
) => {
  return await db
    .collection(USER_TABLE)
    .doc(userId)
    .set(
      {
        ...user,
        timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
};

export const updateUserWithArtistIdWhenCreatingArtistProfile = async (
  userId: string,
  artistId: string
) => {
  return await db
    .collection(USER_TABLE)
    .doc(userId)
    .update({ artistId: artistId });
};

export const fetchArtForArtistIdWithLimit = async (
  artistId: string,
  limit: number
) => {
  return await db
    .collection(ARTWORK_TABLE)
    .where(ARTIST_ID, '==', artistId)
    .limit(limit)
    .get();
};

export const createCustomArtQuery = async (searchFilters: searchStateType) => {
  let dbQuery = db.collection(ARTWORK_TABLE);
  if (searchFilters.materialSelection) {
    dbQuery = addArtMaterialFilter(dbQuery, searchFilters.materialSelection);
  }
  if (searchFilters.sizeSelection) {
    dbQuery = addSizeFilter(dbQuery, searchFilters.sizeSelection);
  }
  if (searchFilters.artType) {
    dbQuery = addArtTypeFilter(dbQuery, searchFilters.artType);
  }
  // ... add more queries here

  return await dbQuery.limit(20).get();
};

const addArtMaterialFilter = (query: any, artMaterial: string) => {
  return query.where(ART_MATERIALS, 'array-contains', artMaterial);
};

const addSizeFilter = (query: any, size: string) => {
  return query.where('size', '==', size);
};

const addArtTypeFilter = (query: any, artType: string) => {
  return query.where('artCategory', '==', artType);
};

// Deprecated whilst auction behavior is handled by the artwork itself
// export const fetchCompletedAuctionsForPurchaserWithLimit = async (
//   purchaserId: string,
//   limit: number
// ) => {
//   return await db
//     .collection(COMPLETED_AUCTION_TABLE)
//     .where('purchaserId', '==', purchaserId)
//     .limit(limit)
//     .get();
// };

// export const fetchAuctionReferenceByAuctionIdForSnapshot = async (
//   auctionId: string,
//   callback: any
// ) => {
//   return await db
//     .collection(AUCTION_TABLE)
//     .doc(auctionId)
//     .onSnapshot((snapshot) => {
//       if (snapshot.exists) {
//         callback({ id: snapshot.id, data: snapshot.data() });
//       }
//     });
// };

// export const updateAuctionAsSoldForArtworkId = async (auctionId: string) => {
//   db.collection(AUCTION_TABLE).doc(auctionId).update({ sold: true });
// };

// export const createCompletedAuctionRecord = async (
//   userId: string,
//   auctionId: string,
//   auction: auctionType
// ) => {
//   const completedAuction: completedAuctionType = {
//     purchaserId: userId,
//     artistId: auction.artistId,
//     artworkId: auction.artworkId,
//     price: auction.currentBid,
//     auctionId: auctionId,
//     timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
//   };
//   db.collection(COMPLETED_AUCTION_TABLE).add(completedAuction);
// };

// export const addAuctionToFirebase = async (auction: auctionType) => {
//   return db.collection(AUCTION_TABLE).add({
//     ...auction,
//     timestamp: Firebase.firestore.FieldValue.serverTimestamp(),
//   });
// };
