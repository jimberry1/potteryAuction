import SearchFilterBar from '../../components/searchFilterBar';
import ArtistSearchResultsDisplay from './artistSearchResultsDisplay';

export interface ArtistSearchResultProps {}

const ArtistSearchResult: React.SFC<ArtistSearchResultProps> = () => {
  return (
    <>
      <SearchFilterBar />
      <ArtistSearchResultsDisplay />
    </>
  );
};

export default ArtistSearchResult;
