import React, { useState, useEffect } from 'react';
import { artworkType } from '../types';
import { addArtworkToArtworkDatabaseTable } from '../utilities/firebaseQueries';

export interface TestPageProps {}

const TestPage: React.FunctionComponent<TestPageProps> = () => {
  const sendTestArtworkToDatabase = () => {
    const dummyArtwork: artworkType = {
      title: 'blah',
      description: 'desc',
      artistName: 'jim',
      artistUid: 'testUID',
      auctionId: 'auctionUID',
      artCategory: ['pots', 'art'],
      artMaterials: ['clay', 'butter'],
      photosURL: ['https://source.unsplash.com/random'],
      views: 0,
    };
    addArtworkToArtworkDatabaseTable(dummyArtwork)
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
      </div>
    </div>
  );
};

export default TestPage;
