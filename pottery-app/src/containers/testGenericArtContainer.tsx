import React, { useState, useEffect } from 'react';
import ArtCard from '../components/tailwindComponents/artCard';
import db from '../firebase';
import { artworkType } from '../types';
import { createCustomArtQuery } from '../utilities/firebaseQueries';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ArtContainer } from '../styles/genericStyles';
export interface TestGenericArtContainerProps {
  artQuery?: any;
}

const TestGenericArtContainer: React.SFC<TestGenericArtContainerProps> = ({
  artQuery,
}) => {
  const artSearchFilters = useSelector((state: RootStateOrAny) => state.search);
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
