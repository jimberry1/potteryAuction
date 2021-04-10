import * as React from 'react';
import { useState, useEffect } from 'react';
import ArtResultsSet from '../../components/artResultsSet';
import { artworkAuctionType, artworkType } from '../../types';
import { fetchArtworksForArtistIdWithLimit } from '../../utilities/firebaseQueries';

export interface ManageArtistArtworksProps {
  artistId: string;
}

interface artworkState {
  id: string;
  data: artworkAuctionType;
}
/**
 * This container loads all artworks for a user and displays them in a grid.
 * If the artwork is selected then the addOrEditArtworkContiner is called to manage the state changes to a given artwork
 * @returns
 */
const ManageArtistArtworks: React.SFC<ManageArtistArtworksProps> = ({
  artistId,
}) => {
  const [soldArtworks, setSoldArtworks] = useState<artworkState[]>([]);
  const [forSaleArtworks, setForSaleArtworks] = useState<artworkState[]>([]);

  const [selectedArtworkId, setSelectedArtworkId] = useState('');

  useEffect(() => {
    fetchArtworksForArtistIdWithLimit(artistId, 100).then(
      (artworksSnapshot) => {
        setSoldArtworks(
          artworksSnapshot.docs
            .filter((artwork) => artwork.data().sold)
            .map((artwork: any) => ({
              id: artwork.id,
              data: artwork.data(),
            }))
        );
        setForSaleArtworks(
          artworksSnapshot.docs
            .filter((artwork) => !artwork.data().sold)
            .map((artwork: any) => ({
              id: artwork.id,
              data: artwork.data(),
            }))
        );
      }
    );
  }, [artistId]);
  return (
    <div>
      {soldArtworks[0] && (
        <ArtResultsSet
          artworks={soldArtworks.filter(
            (artwork: artworkState) => artwork.data.sold
          )}
          title="Sold Artworks"
        />
      )}
      {forSaleArtworks[0] && (
        <ArtResultsSet
          artworks={forSaleArtworks.filter(
            (artwork: artworkState) => !artwork.data.sold
          )}
          title="Items for sale"
        />
      )}
    </div>
  );
};

export default ManageArtistArtworks;
