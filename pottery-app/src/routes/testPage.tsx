import React, { useState, useEffect } from 'react';
import { artistType, artworkType } from '../types';
import Modal from '../UI/modal';
import {
  addArtistToFirebase,
  addArtworkToArtworkDatabaseTable,
} from '../utilities/firebaseQueries';

export interface TestPageProps {}

const TestPage: React.FunctionComponent<TestPageProps> = () => {
  const sendTestArtworkToDatabase = () => {
    const dummyArtwork: artworkType = {
      title: 'blah',
      description: 'desc',
      artistName: 'jim',
      artistUid: 'AqbGwOUneeNiIZzwvLNZ',
      auctionId: 'auctionUID',
      artCategory: 'Pottery',
      artMaterials: ['Clay', 'butter'],
      photosURL: ['https://source.unsplash.com/random'],
      views: 0,
      size: 'M',
      charityName: 'British Heart Foundation',
      charityDescription: 'This charity means a lot to me',
      charityURL: 'https://www.bhf.org.uk/',
      sold: false,
    };
    addArtworkToArtworkDatabaseTable(dummyArtwork)
      .catch((err) => console.log(err))
      .then(() => {
        console.log('success');
      });
  };

  const sendDummyArtistDataToFirebase = () => {
    const fakeArtist: artistType = {
      firstName: 'Jim',
      surname: 'Berry',
      userId: '',
      profileDescription: 'This is my art page where I make and sell art',
      photoURL:
        'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      location: 'London',
    };

    addArtistToFirebase(fakeArtist)
      .catch((err) => console.log(err))
      .then(() => {
        console.log('success');
      });
  };
  return (
    <div className="relative top-100">
      <div className="inline-block mr-2 mt-2">
        <button
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          onClick={sendTestArtworkToDatabase}
        >
          Add dummy artwork
        </button>
        <button
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          onClick={sendDummyArtistDataToFirebase}
        >
          Add dummy artist
        </button>
        <Modal />
      </div>
    </div>
  );
};

export default TestPage;
