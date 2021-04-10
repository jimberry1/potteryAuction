import SearchFilterBar from '../../../components/searchFilterBar';
import { artSearchFilterFields } from '../../../configuration/potFilterFields';
import ArtistSearchResultsDisplay from './artistSearchResultsDisplay';
// import {artis}
export interface ArtistSearchResultContainerProps {}

const ArtistSearchResultContainer: React.SFC<ArtistSearchResultContainerProps> = () => {
  return (
    <>
      {/* <SearchFilterBar searchFilterFields={artSearchFilterFields} /> */}
      <ArtistSearchResultsDisplay />
    </>
  );
};

export default ArtistSearchResultContainer;
