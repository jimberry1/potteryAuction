import { useState, useEffect } from 'react';
import ArtResultsSet from '../../components/artResultsSet';
import TestTailwindProfile from '../../components/tailwindComponents/testTailwindProfile';
import {
  fetchArtForArtistIdWithLimit,
  fetchArtistByArtistId,
} from '../../utilities/firebaseQueries';
import { generateArtistStatsFromArtworkArray } from '../../utilities/utilityFunctions';
import { AiOutlinePlusCircle } from 'react-icons/ai';
export interface AccountPageArtistContainerProps {
  artistId: string;
}

const AccountPageArtistContainer: React.SFC<AccountPageArtistContainerProps> = ({
  artistId,
}) => {
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <ArtResultsSet artworks={artistArtwork} title="My Artwork" />

          <AiOutlinePlusCircle size={50} style={{ marginBottom: 10 }} />
        </div>
      )}
    </div>
  );
};

export default AccountPageArtistContainer;
