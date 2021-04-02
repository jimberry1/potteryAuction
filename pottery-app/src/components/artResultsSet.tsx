import { ArtContainer } from '../styles/genericStyles';
import { artworkType } from '../types';
import ArtCard from './tailwindComponents/artCard';

export interface ArtResultsSetProps {
  artworks: { id: string; data: artworkType }[];
  title?: string;
}

const ArtResultsSet: React.SFC<ArtResultsSetProps> = ({ artworks, title }) => {
  return (
    <>
      {title && (
        <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-black sm:text-4xl title-font text-center">
          {title}
        </h2>
      )}
      <ArtContainer>
        {artworks.map((artwork: { id: string; data: artworkType }) => {
          return (
            <ArtCard
              artworkId={artwork.id}
              artwork={artwork.data}
              key={artwork.id}
            />
          );
        })}
      </ArtContainer>
    </>
  );
};

export default ArtResultsSet;
