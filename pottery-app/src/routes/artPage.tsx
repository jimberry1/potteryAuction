import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import {
  addViewToArtworkWhenLoaded,
  fetchArtworkByArtworkId,
} from '../utilities/firebaseQueries';
import Firebase from 'firebase';
import { artworkType } from '../types';
import PageLoaderHoc from '../utilities/hoc/pageLoaderHoc';
import ArtComponent from '../components/tailwindComponents/artComponent';
import ArtContentWithArtist from '../components/tailwindComponents/artContentWithArtist';
import ArtContentWithPrice from '../components/tailwindComponents/artContentWithPrice';
import db from '../firebase';
import { ARTWORK_TABLE } from '../utilities/firebaseQueryConfig';

export interface ArtPageProps {}

const ArtPage: React.SFC<ArtPageProps> = () => {
  const location = useLocation();
  const [artworkId, setArtworkId] = useState('');
  const [loading, setLoading] = useState(true);
  const [artwork, setArtwork] = useState({
    title: '',
    description: '',
    artistName: '',
    artistUid: '',
    auctionId: '',
    artCategory: [],
    artMaterials: [],
    photosURL: [],
    views: 0,
  });

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    if (parsed.artworkId) {
      setArtworkId(parsed.artworkId);
    }
  }, [location]);

  useEffect(() => {
    if (artworkId) {
      fetchArtworkByArtworkId(artworkId)
        //   .catch((err) => console.log(err))
        .then((artworkSnapshot: any) => {
          console.log('artwork fetched successfully');
          if (artworkSnapshot.exists) {
            setArtwork(artworkSnapshot.data());
            console.log(artworkSnapshot.data());
          }
        });
    }
    setLoading(false);
  }, [artworkId]);

  useEffect(() => {
    if (artworkId && artwork.title) {
      addViewToArtworkWhenLoaded(artworkId);
    }
  }, [artworkId, artwork]);

  return (
    <div>
      <PageLoaderHoc loading={loading}>
        {/* <ArtComponent artwork={artwork} /> */}
        {/* <ArtContentWithArtist artwork={artwork} /> */}
        <ArtContentWithPrice artwork={artwork} />
      </PageLoaderHoc>
    </div>
  );
};

export default ArtPage;
