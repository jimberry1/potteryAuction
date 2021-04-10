import * as React from 'react';
import { useState, useEffect } from 'react';
import AddOrUpdateArtworkForm from '../../components/forms/addOrUpdateArtworkForm';
import ArtCard from '../../components/tailwindComponents/artCard';
import { BUYOUT_AUCTION_TYPE } from '../../configuration/staticVariableNames/databaseTableAndFieldNames';

import { artworkAuctionType, artworkType } from '../../types';
import {
  addArtworkToArtworkDatabaseTable,
  fetchArtworkByArtworkId,
} from '../../utilities/firebaseQueries';

export interface AddOrEditArtworkContainerProps {
  selectedArtworkId: string;
  artistId: string;
  userId: string;
}

/**
 * This container controls the logic to make changes to artworks. It has one optional argument of an artwork. If the artwork
 * is provided then the container will display the artwork information to be editted. If the artwork is not provided then the container will
 * display blank fields that are required for the addition of an artwork piece. The container will also handle the submission of data to firebase.
 */
const AddOrEditArtworkContainer: React.SFC<AddOrEditArtworkContainerProps> = ({
  selectedArtworkId,
  artistId,
  userId,
}) => {
  const [artwork, setArtwork] = useState<artworkAuctionType>({
    artistId: artistId,
    artistUserId: userId,
    buyerId: '',
    timestamp: null,
    // artwork info
    title: '',
    description: '',
    artCategory: '',
    artMaterials: [],
    views: 0,
    photosURL: ['https://source.unsplash.com/random'], // TODO FIX THIS
    size: '',
    // Artist info
    artistName: '',
    artistDescription: '',
    // Charity info
    charityName: '',
    charityDescription: '',
    charityURL: '',
    // auction info
    price: 0,
    sold: false,
    auctionType: BUYOUT_AUCTION_TYPE,
  });

  const addNewArtworkToCollection = () => {
    addArtworkToArtworkDatabaseTable(artwork);
  };

  useEffect(() => {
    if (selectedArtworkId) {
      fetchArtworkByArtworkId(selectedArtworkId).then((artwork: any) => {
        if (artwork.exists) {
          setArtwork(artwork.data());
        }
      });
    }
  }, [artistId, userId, selectedArtworkId]);
  return (
    <div>
      {/* <ArtCard artwork={artwork} artworkId={selectedArtworkId} /> */}
      <AddOrUpdateArtworkForm
        artworkAuction={artwork}
        titleChanged={(newVal: string) =>
          setArtwork((artwork) => ({ ...artwork, title: newVal }))
        }
        descriptionChanged={(newVal: string) =>
          setArtwork((artwork) => ({ ...artwork, description: newVal }))
        }
        categoryChanged={(newVal: string) =>
          setArtwork((artwork) => ({ ...artwork, artCategory: newVal }))
        }
        materialsChanged={(newVal: string) =>
          setArtwork((artwork) => ({
            ...artwork,
            artMaterials: artwork.artMaterials.concat(newVal),
          }))
        }
        priceChanged={(newVal: number) =>
          setArtwork((artwork) => ({ ...artwork, price: newVal }))
        }
        sizeChanged={(newVal: string) =>
          setArtwork((artwork) => ({ ...artwork, size: newVal }))
        }
        submitArtworkClicked={() => {
          console.log('I have been called');
        }}
      />
    </div>
  );
};

export default AddOrEditArtworkContainer;
