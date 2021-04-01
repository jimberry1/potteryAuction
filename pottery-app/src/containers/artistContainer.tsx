import { useState, useEffect } from 'react';
import TestArtistDisplay from '../components/testArtistDisplay';
import { fetchArtistByArtistId } from '../utilities/firebaseQueries';

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
    },
  });

  useEffect(() => {
    if (artistId) {
      fetchArtistByArtistId(artistId).then((artistSnapshot: any) => {
        if (artistSnapshot.exists) {
          setArtist({ id: artistSnapshot.id, data: artistSnapshot.data() });
        }
      });
    }
  }, [artistId]);
  return (
    <div>
      {artist.data.firstName && <TestArtistDisplay artist={artist.data} />}
    </div>
  );
};

export default ArtistContainer;
