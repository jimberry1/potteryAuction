import React, { useState, useEffect } from 'react';
import ArtCard from '../components/tailwindComponents/artCard';
import db from '../firebase';
import { artworkType } from '../types';
import styled from 'styled-components';
export interface TestGenericArtContainerProps {
  artQuery?: any;
}

const ArtContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //   margin: 120px;
`;

const TestGenericArtContainer: React.SFC<TestGenericArtContainerProps> = ({
  artQuery,
}) => {
  const [artResults, setArtResults]: any = useState([]);

  useEffect(() => {
    db.collection('artwork')
      .limit(3)
      .get()
      .then((artQuery) => {
        setArtResults(
          artQuery.docs.map((artworkDoc) => ({
            id: artworkDoc.id,
            data: artworkDoc.data(),
          }))
        );
      });
  }, []);

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
