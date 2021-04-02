import { ArtistProfileArtworkStatistics, artworkType } from '../types';

export const formatItemDescriptionForCard: (description: string) => string = (
  description
) => {
  if (description.length < 50) {
    return description;
  } else {
    return description.substring(0, 50).concat('...');
  }
};

export const formatItemTitleForCard: (title: string) => string = (title) => {
  if (title.length < 40) {
    return title;
  } else return title.substring(0, 40).concat('...');
};

export const generateArtistStatsFromArtworkArray: (
  artworks: { id: string; data: artworkType }[]
) => ArtistProfileArtworkStatistics = (artworks) => {
  if (!artworks[0]) {
    return {
      totalViews: 0,
      totalEarnedFromSales: 0,
      totalSales: 0,
      artworkCount: 0,
    };
  }
  const reducedViews = artworks.map((artwork) => artwork.data.views);
  return {
    totalViews: artworks
      .map((artwork) => artwork.data.views)
      .reduce((total = 0, views) => total + views),
    totalEarnedFromSales: 0,
    totalSales: artworks.filter((artwork) => artwork.data.sold).length,
    artworkCount: artworks.length,
  };
};
