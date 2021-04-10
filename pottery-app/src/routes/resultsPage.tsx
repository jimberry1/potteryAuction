import * as React from 'react';
import { useState, useEffect } from 'react';
import ArtSearchResultContainer from '../containers/resultsContainers/artSearchResult/artSearchResultContainer';
import { useLocation } from 'react-router';
import ArtistSearchResultContainer from '../containers/resultsContainers/artistSearchResult/artistSearchResultContainer';
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
    <div style={{ width: '100vw', minHeight: '100vh' }}>
      {category === 'artwork' && <ArtSearchResultContainer />}
      {category === 'artist' && <ArtistSearchResultContainer />}
      {!category && 'Pick something to search for'}
    </div>
  );
};

export default ResultsPage;
