import SearchFilterBar from '../../components/searchFilterBar';
import { artSearchFilterFields } from '../../configuration/potFilterFields';
import TestGenericArtContainer from './testGenericArtContainer';

export interface ArtSearchResultContainerProps {}

const ArtSearchResultContainer: React.SFC<ArtSearchResultContainerProps> = () => {
  return (
    <>
      <SearchFilterBar searchFilterFields={artSearchFilterFields} />
      <TestGenericArtContainer />
    </>
  );
};

export default ArtSearchResultContainer;
