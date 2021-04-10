import * as React from 'react';
import { useState, useEffect } from 'react';

import { artworkType } from '../../types';

export interface AddOrEditArtworkContainerProps {
  artwork?: { id: string; data: artworkType };
}

/**
 * This container controls the logic to make changes to artworks. It has one optional argument of an artwork. If the artwork
 * is provided then the container will display the artwork information to be editted. If the artwork is not provided then the container will
 * display blank fields that are required for the addition of an artwork piece. The container will also handle the submission of data to firebase.
 */
const AddOrEditArtworkContainer: React.SFC<AddOrEditArtworkContainerProps> = ({
  artwork,
}) => {
  const [title, setTitle] = useState(artwork?.data?.title || '');
  const [description, setDescription] = useState(
    artwork?.data?.description || ''
  );
  const [artCategory, setArtCategory] = useState(
    artwork?.data?.artCategory || ''
  );
  const [size, setSize] = useState(artwork?.data?.size || '');
  const [charityName, setCharityName] = useState(
    artwork?.data?.charityName || ''
  );
  const [charityURL, setCharityURL] = useState(artwork?.data?.charityURL || '');
  const [charityDescription, setCharityDescription] = useState(
    artwork?.data?.charityDescription || ''
  );
  const [artMaterials, setArtMaterials] = useState(artwork?.data?.title || []);

  console.log(artwork);
  console.log('This is the title' + title);

  return <div></div>;
};

export default AddOrEditArtworkContainer;
