import * as React from 'react';
import { useState, useEffect } from 'react';
import ArtSearchResultContainer from '../containers/artSearchResult/artSearchResultContainer';
import { useLocation } from 'react-router';
import ArtistSearchResultContainer from '../containers/artistSearchResult/artistSearchResultContainer';
export interface ResultsPageProps {}

const ResultsPage: React.SFC<ResultsPageProps> = () => {
  const location = useLocation();
  const [category, setCategory] = useState('');

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    console.log(parsed);
    if (parsed.category) {
      setCategory(parsed.category);
    }
  }, [location]);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {category === 'artwork' && <ArtSearchResultContainer />}
      {category === 'artist' && <ArtistSearchResultContainer />}
    </div>
  );
};

export default ResultsPage;
