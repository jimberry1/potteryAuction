import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import ArtContainer from '../containers/artContainers/artContainer';

export interface ArtPageProps {}

const ArtPage: React.SFC<ArtPageProps> = () => {
  const location = useLocation();

  const [artworkId, setArtworkId] = useState('');

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    if (parsed.artworkId) {
      setArtworkId(parsed.artworkId);
    }
  }, [location]);

  return (
    <div>
      <ArtContainer artworkId={artworkId} />
    </div>
  );
};

export default ArtPage;
