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
  artCategory: string;
  artMaterials: string[];
  views: number;
  photosURL: string[];
  size: string;
  charityName: string;
  charityDescription: string;
  charityURL: string;
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

// Reducer state profiles

export type searchStateType = {
  priceSelection: string;
  materialSelection: string;
  sizeSelection: string;
  artType: string;
};

export type DropdownMenuOptionType = {
  id: string;
  label: string;
  value: string;
};

export type DropDownMenuType = {
  id: string;
  menuOptions: DropdownMenuOptionType[];
  filterCategoryName: string;
  dispatchUpdateFunction: (newFilterValue: string) => void;
  getDesiredStateFromSearchSelector: (searchState: searchStateType) => string;
};

export type ModalInformationType = {
  title?: string;
  body?: string;
  actionButtonDescription?: string;
};

// Reducer action types
// export type
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
