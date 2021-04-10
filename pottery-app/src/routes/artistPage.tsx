import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import ArtistContainer from '../containers/artistContainers/artistContainer';

export interface ArtistPageProps {}

const ArtistPage: React.SFC<ArtistPageProps> = () => {
  const location = useLocation();
  const [artistId, setArtistId] = useState('');
  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    if (parsed.artistId) {
      setArtistId(parsed.artistId);
    }
  }, [location]);
  return (
    <div>
      <ArtistContainer artistId={artistId} />
    </div>
  );
};

export default ArtistPage;
