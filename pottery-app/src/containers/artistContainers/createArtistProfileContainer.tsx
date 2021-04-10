import * as React from 'react';
import { useState, useEffect } from 'react';
import { artistType } from '../../types';

export interface CreateArtistProfileContainerProps {}

const CreateArtistProfileContainer: React.SFC<CreateArtistProfileContainerProps> = () => {
  const [artistProfile, setArtistProfile] = useState<artistType>({
    firstName: '',
    surname: '',
    userId: '',
    profileDescription: '',
    photoURL: '',
    location: '',
  });
  return <div></div>;
};

export default CreateArtistProfileContainer;
