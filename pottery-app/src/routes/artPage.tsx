import { useLocation, useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import {
  addViewToArtworkWhenLoaded,
  fetchArtworkByArtworkId,
} from '../utilities/firebaseQueries';
import PageLoaderHoc from '../utilities/hoc/pageLoaderHoc';
import ArtComponent from '../components/tailwindComponents/artComponent';
import ArtContentWithArtist from '../components/tailwindComponents/artContentWithArtist';
import ArtContentWithPrice from '../components/tailwindComponents/artContentWithPrice';
import ArtWithSectionsAndPrice from '../components/tailwindComponents/artWithSectionsAndPrice';
import { redirectToArtistPage } from '../utilities/redirectFunctions';

export interface ArtPageProps {}

const ArtPage: React.SFC<ArtPageProps> = () => {
  const location = useLocation();
  const history = useHistory();
  const [artworkId, setArtworkId] = useState('');
  const [loading, setLoading] = useState(true);
  const [artwork, setArtwork] = useState({
    title: '',
    description: '',
    artistName: '',
    artistUid: '',
    auctionId: '',
    artCategory: '',
    artMaterials: [],
    photosURL: [],
    views: 0,
    size: '',
    charityName: '',
    charityDescription: '',
    charityURL: '',
    sold: false,
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

  const artistClickedHandlerInvoked = (artistId: string) => {
    history.push(redirectToArtistPage(artistId));
  };

  return (
    <div>
      <PageLoaderHoc loading={loading}>
        {/* <ArtComponent artwork={artwork} /> */}
        {/* <ArtContentWithArtist artwork={artwork} /> */}
        {/* <ArtContentWithPrice artwork={artwork} /> */}
        <ArtWithSectionsAndPrice
          artwork={artwork}
          artistClicked={(artistId: string) =>
            artistClickedHandlerInvoked(artistId)
          }
        />
      </PageLoaderHoc>
    </div>
  );
};

export default ArtPage;
