import React, { useState, useEffect } from 'react';
import { fetchArtistsWithLimit } from '../../utilities/firebaseQueries';
import { RootStateOrAny, useSelector } from 'react-redux';
import ArtistResultsSet from '../../components/artistResultsSet';
import { searchStateSelector } from '../../store/storeUtilities';

export interface ArtistSearchResultsDisplayProps {}

const ArtistSearchResultsDisplay: React.FunctionComponent<ArtistSearchResultsDisplayProps> = () => {
  const artSearchFilters = useSelector(searchStateSelector);
  const [artistResults, setArtistResults]: any = useState([]);

  useEffect(() => {
    fetchArtistsWithLimit(10).then((artQueryResults) => {
      setArtistResults(
        artQueryResults.docs.map((artworkDoc) => ({
          id: artworkDoc.id,
          data: artworkDoc.data(),
        }))
      );
    });
  }, [artSearchFilters]);

  return (
    <>
      {artistResults && (
        <ArtistResultsSet artists={artistResults} title="Meet our artists" />
      )}
    </>
  );
};

export default ArtistSearchResultsDisplay;
