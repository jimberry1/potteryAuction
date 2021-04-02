import { artistType } from '../types';
import { redirectToArtistPage } from '../utilities/redirectFunctions';
import {
  formatItemDescriptionForCard,
  formatItemTitleForCard,
} from '../utilities/utilityFunctions';

export interface ArtistCardProps {
  artist: artistType;
  artistId: string;
}

const ArtistCard: React.SFC<ArtistCardProps> = ({ artist, artistId }) => {
  return (
    <div className="m-2">
      <a
        href={redirectToArtistPage(artistId)}
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1"
      >
        <div className="flex flex-col h-96 w-64">
          <img
            src={
              artist ? artist.photoURL : 'https://source.unsplash.com/random'
            }
            className="object-cover w-full h-2/3 "
            alt=""
          />
          <div className=" border border-t-0 rounded-b h-1/3">
            <div className="p-5 w-full">
              <h6 className="mb-2 font-semibold leading-5">
                {artist
                  ? formatItemTitleForCard(
                      `${artist.firstName} ${artist.surname}`
                    )
                  : 'No name found'}
              </h6>
              <p className="text-sm text-gray-900">
                {artist
                  ? formatItemDescriptionForCard(artist.profileDescription)
                  : 'No description found...'}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArtistCard;
