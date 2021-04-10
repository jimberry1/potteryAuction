import { auctionType } from '../../types';

export interface BasicAuctionComponentProps {
  auction: auctionType;
}

const deprecatedAuctionTypeComponent: React.FunctionComponent<BasicAuctionComponentProps> = ({
  auction,
}) => {
  return (
    <div className="flex mt-5">
      <span className="title-font font-medium text-2xl text-gray-900">
        £{auction.currentBid?.toFixed(2)}
      </span>
      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
        Buy
      </button>
      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        </svg>
      </button>
    </div>
  );
};

export default deprecatedAuctionTypeComponent;
