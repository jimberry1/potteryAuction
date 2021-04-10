import { useState, useEffect } from 'react';
import ArtResultsSet from '../../components/artResultsSet';
import TestTailwindProfile from '../../components/tailwindComponents/testTailwindProfile';
import TestArtistDisplay from '../../components/testArtistDisplay';
import { ArtContainer } from '../../styles/genericStyles';
import { ArtistProfileArtworkStatistics } from '../../types';
import {
  fetchArtForArtistIdWithLimit,
  fetchArtistByArtistId,
} from '../../utilities/firebaseQueries';
import { generateArtistStatsFromArtworkArray } from '../../utilities/utilityFunctions';

export interface ArtistContainerProps {
  artistId: string;
}

const ArtistContainer: React.SFC<ArtistContainerProps> = ({ artistId }) => {
  const [artist, setArtist] = useState({
    id: '',
    data: {
      firstName: '',
      surname: '',
      userId: '',
      profileDescription: '',
      photoURL: '',
      location: '',
    },
  });
  const [artistArtwork, setArtistArtwork]: any = useState([]);

  useEffect(() => {
    if (artistId) {
      fetchArtistByArtistId(artistId).then((artistSnapshot: any) => {
        if (artistSnapshot.exists) {
          setArtist({ id: artistSnapshot.id, data: artistSnapshot.data() });
        }
      });
    }
  }, [artistId]);

  useEffect(() => {
    if (artistId) {
      fetchArtForArtistIdWithLimit(artistId, 10).then(
        (artworkQuerySnapshot) => {
          setArtistArtwork(
            artworkQuerySnapshot.docs.map((artwork) => ({
              id: artwork.id,
              data: artwork.data(),
            }))
          );
        }
      );
    }
  }, [artistId]);
  return (
    <div>
      {artist.data.firstName && (
        <TestTailwindProfile
          artist={artist.data}
          artworkStats={generateArtistStatsFromArtworkArray(artistArtwork)}
        />
      )}
      {artistArtwork[0] && (
        <ArtResultsSet
          artworks={artistArtwork}
          title="Artwork by this artist"
        />
      )}
    </div>
  );
};

export default ArtistContainer;
