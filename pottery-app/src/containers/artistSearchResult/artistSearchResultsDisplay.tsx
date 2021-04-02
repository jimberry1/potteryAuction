import React, { useState, useEffect } from 'react';
import { createCustomArtQuery } from '../../utilities/firebaseQueries';
import { RootStateOrAny, useSelector } from 'react-redux';
import ArtResultsSet from '../../components/artResultsSet';

export interface ArtistSearchResultsDisplayProps {}

const ArtistSearchResultsDisplay: React.SFC<ArtistSearchResultsDisplayProps> = () => {
  const artSearchFilters = useSelector((state: RootStateOrAny) => state.search);
  const [artistResults, setArtistResults]: any = useState([]);

  useEffect(() => {
    createCustomArtQuery(artSearchFilters).then((artQueryResults) => {
      setArtistResults(
        artQueryResults.docs.map((artworkDoc) => ({
          id: artworkDoc.id,
          data: artworkDoc.data(),
        }))
      );
    });
  }, [artSearchFilters]);

  return <>{artistResults && <ArtResultsSet artworks={artistResults} />}</>;
};

export default ArtistSearchResultsDisplay;
