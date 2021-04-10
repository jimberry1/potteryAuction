import { useState, useEffect } from 'react';
import TestTailwindProfile from '../../components/tailwindComponents/testTailwindProfile';
import {
  fetchArtForArtistIdWithLimit,
  fetchArtistByArtistId,
} from '../../utilities/firebaseQueries';
import { generateArtistStatsFromArtworkArray } from '../../utilities/utilityFunctions';

export interface ManageArtistProfileContainerProps {
  artistId: string;
}

const ManageArtistProfileContainer: React.SFC<ManageArtistProfileContainerProps> = ({
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
      isApproved: true,
      isSuspended: false,
      charityId: '',
      charityName: '',
      charityDonationPercentage: -1,
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
    </div>
  );
};

export default ManageArtistProfileContainer;
