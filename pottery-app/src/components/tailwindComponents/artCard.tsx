import { artworkAuctionType, artworkType } from '../../types';
import {
  formatItemDescriptionForCard,
  formatItemTitleForCard,
} from '../../utilities/utilityFunctions';

export interface ArtCardProps {
  artwork: artworkAuctionType;
  artworkId: string;
}

const ArtCard: React.SFC<ArtCardProps> = ({ artwork, artworkId }) => {
  return (
    <div className="m-2">
      <a
        href={`/artwork?artworkId=${artwork ? artworkId : ''}`}
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1"
      >
        <div className="flex flex-col h-96 w-64">
          <img
            src={
              artwork
                ? artwork.photosURL[0]
                : 'https://source.unsplash.com/random'
            }
            className="object-cover w-full h-2/3 "
            alt=""
          />
          <div className=" border border-t-0 rounded-b h-1/3">
            <div className="p-5 w-full">
              <h6 className="mb-2 font-semibold leading-5">
                {artwork
                  ? formatItemTitleForCard(artwork.title)
                  : 'No title found'}
              </h6>
              <p className="text-sm text-gray-900">
                {artwork
                  ? formatItemDescriptionForCard(artwork.description)
                  : 'No description found...'}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArtCard;
