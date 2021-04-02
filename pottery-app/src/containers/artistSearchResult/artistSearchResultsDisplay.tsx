import React, { useState, useEffect } from 'react';
import {
  createCustomArtQuery,
  fetchArtistsWithLimit,
} from '../../utilities/firebaseQueries';
import { RootStateOrAny, useSelector } from 'react-redux';
import ArtResultsSet from '../../components/artResultsSet';
import ArtistResultsSet from '../../components/artistResultsSet';

export interface ArtistSearchResultsDisplayProps {}

const ArtistSearchResultsDisplay: React.SFC<ArtistSearchResultsDisplayProps> = () => {
  const artSearchFilters = useSelector((state: RootStateOrAny) => state.search);
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
