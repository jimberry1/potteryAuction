import Firebase from 'firebase';
export type userType = {
  forename: string;
  surname: string;
  emailAddress: string;
  artistId: string;
  isAdmin: boolean;
  timestamp: Firebase.firestore.Timestamp | null;
  photoURL?: string;
};

export type userTypeForUpdating = {
  forename?: string;
  surname?: string;
  emailAddress?: string;
  isAdmin?: boolean;
};

export type artworkType = {
  title: string;
  description: string;
  artistName: string;
  artistId: string;
  auctionId: string;
  artCategory: string;
  artMaterials: string[];
  views: number;
  photosURL: string[];
  size: string;
  charityName: string;
  charityDescription: string;
  charityURL: string;
  sold: boolean;
  timestamp?: Firebase.firestore.Timestamp;
  fish: boolean;
};

export type artworkAuctionType = {
  // Linking info
  artistId: string;
  artistUserId: string;
  buyerId: string;
  timestamp: Firebase.firestore.Timestamp | any;
  // artwork info
  title: string;
  description: string;
  artCategory: string;
  artMaterials: string[];
  views: number;
  photosURL: string[];
  size: string;
  // Artist info
  artistName: string;
  artistDescription: string;
  // Charity info
  charityName: string;
  charityDescription: string;
  charityURL: string;
  // auction info
  price: number;
  sold: boolean;
  auctionType: string;
  // startTimestamp: Firebase.firestore.Timestamp | null;
  // endTimestamp: Firebase.firestore.Timestamp | null;
};

export type auctionType = {
  artworkId: string;
  artistId: string;
  minimumPrice: number;
  currentBid: number;
  standardPrice: number;
  auctionType: string;
  sold: boolean;
  startTimestamp: Firebase.firestore.Timestamp | null;
  endTimestamp: Firebase.firestore.Timestamp | null;
  timestamp: Firebase.firestore.Timestamp | null;
};

export type completedAuctionType = {
  artworkId: string;
  auctionId: string;
  artistId: string;
  purchaserId: string; // should be renamed to buyerId
  price: number;
  timestamp: any;
};

export type artistType = {
  firstName: string;
  surname: string;
  userId: string;
  profileDescription: string;
  photoURL: string;
  location: string;
  timestamp?: Firebase.firestore.Timestamp;
  isApproved: boolean;
  isSuspended: boolean;

  charityId: string;
  charityName: string;
  charityDonationPercentage: number;
};

export type charityType = {
  charityName: string;
  charityDescription: string;
  charityURL: string;
  charityLogoURL: string;
};

// Reducer state profiles

export type searchStateType = {
  priceSelection: string;
  materialSelection: string;
  sizeSelection: string;
  artType: string;
};

export type userStateType = {
  userId: string;
  user: userType;
};

export type adminStateType = {
  showModal: boolean;
  modalInformation: ModalInformationType;
  redirectLink: string;
  showAuth: boolean;
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
  title: string;
  body: string;
  actionButtonDescription: string;
};

export type ArtistProfileArtworkStatistics = {
  totalViews: number;
  artworkCount: number;
  totalSales: number;
  totalEarnedFromSales: number;
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
