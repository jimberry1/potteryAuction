import Firebase from 'firebase';
export type userType = {
  firstName: string;
  surname: string;
  emailAddress: string;
  artistUid: string;
  isAdmin: boolean;
};

export type artworkType = {
  title: string;
  description: string;
  artistName: string;
  artistUid: string;
  auctionId: string;
  artCategory: string[];
  artMaterials: string[];
  views: number;
  photosURL: string[];
};

export type auctionType = {
  artworkId: string;
  minimumPrice: number;
  currentBid: number;
  standardPrice: number;
  auctionType: string;
  startTimestamp: Firebase.firestore.Timestamp;
  endTimestamp: Firebase.firestore.Timestamp;
  sold: boolean;
};

export type aristType = {
  firstName: string;
  surname: string;
  userId: string;
  profileDescription: string;
};

export type DropdownMenuOptionType = {
  id: string;
  label: string;
  value: string;
  selected: boolean;
};
/**
 * Types
 *
 * - user
 *
 * - artwork
 *
 * - artist
 *
 * - auction
 *
 */
