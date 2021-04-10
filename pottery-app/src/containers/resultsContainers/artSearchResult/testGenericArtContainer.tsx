import React, { useState, useEffect } from 'react';
import { createCustomArtQuery } from '../../../utilities/firebaseQueries';
import { RootStateOrAny, useSelector } from 'react-redux';
import ArtResultsSet from '../../../components/artResultsSet';
import { searchStateSelector } from '../../../store/storeUtilities';
export interface TestGenericArtContainerProps {
  artQuery?: any;
}

const TestGenericArtContainer: React.SFC<TestGenericArtContainerProps> = ({
  artQuery,
}) => {
  const artSearchFilters = useSelector(searchStateSelector);
  const [artResults, setArtResults]: any = useState([]);

  useEffect(() => {
    createCustomArtQuery(artSearchFilters).then((artQueryResults) => {
      setArtResults(
        artQueryResults.docs.map((artworkDoc) => ({
          id: artworkDoc.id,
          data: artworkDoc.data(),
        }))
      );
    });
  }, [artSearchFilters]);

  return <>{artResults && <ArtResultsSet artworks={artResults} />}</>;
};

export default TestGenericArtContainer;
