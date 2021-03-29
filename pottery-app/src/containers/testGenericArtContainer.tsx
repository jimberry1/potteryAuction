import React, { useState, useEffect } from 'react';
import ArtCard from '../components/tailwindComponents/artCard';
import db from '../firebase';
import { artworkType } from '../types';
import styled from 'styled-components';
import { createCustomArtQuery } from '../utilities/firebaseQueries';
import { RootStateOrAny, useSelector } from 'react-redux';
export interface TestGenericArtContainerProps {
  artQuery?: any;
}

const ArtContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //   margin: 120px;
  margin-top: 15px;
`;

const TestGenericArtContainer: React.SFC<TestGenericArtContainerProps> = ({
  artQuery,
}) => {
  const artSearchFilters = useSelector((state: RootStateOrAny) => state.search);
  const [artResults, setArtResults]: any = useState([]);

  // I need to write a query that takes the filters from the filter reducer and constructs a custom query
  // Solution 1 would be write a query for every combination of search filter and then call that - but this has lots of manual work and isn't scalable

  useEffect(() => {
    // db.collection('artwork')
    //   .limit(3)
    //   .get()
    createCustomArtQuery(artSearchFilters).then((artQuery) => {
      setArtResults(
        artQuery.docs.map((artworkDoc) => ({
          id: artworkDoc.id,
          data: artworkDoc.data(),
        }))
      );
    });
  }, [artSearchFilters]);

  return (
    <ArtContainer>
      {artResults &&
        artResults.map((artwork: { id: string; data: artworkType }) => {
          return (
            <ArtCard
              artworkId={artwork.id}
              artwork={artwork.data}
              key={artwork.id}
            />
          );
        })}
    </ArtContainer>
  );
};

export default TestGenericArtContainer;
