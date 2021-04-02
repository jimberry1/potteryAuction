import { ArtContainer } from '../styles/genericStyles';
import { artistType, artworkType } from '../types';
import ArtistCard from './artistCard';

export interface ArtistResultsSetProps {
  artists: { id: string; data: artistType }[];
  title?: string;
}

const ArtistResultsSet: React.SFC<ArtistResultsSetProps> = ({
  artists,
  title,
}) => {
  return (
    <>
      {title && (
        <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-black sm:text-4xl title-font text-center">
          {title}
        </h2>
      )}
      <ArtContainer>
        {artists.map((artist: { id: string; data: artistType }) => {
          return (
            <ArtistCard
              artistId={artist.id}
              artist={artist.data}
              key={artist.id}
            />
          );
        })}
      </ArtContainer>
    </>
  );
};

export default ArtistResultsSet;
