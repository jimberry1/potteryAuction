import SearchFilterBar from '../../components/searchFilterBar';
import TestGenericArtContainer from './testGenericArtContainer';

export interface ArtSearchResultContainerProps {}

const ArtSearchResultContainer: React.SFC<ArtSearchResultContainerProps> = () => {
  return (
    <>
      <SearchFilterBar />
      <TestGenericArtContainer />
    </>
  );
};

export default ArtSearchResultContainer;
