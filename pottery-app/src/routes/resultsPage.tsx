import SearchFilterBar from '../components/searchFilterBar';
import ArtSearchResultContainer from '../containers/artSearchResult/artSearchResultContainer';
import TestGenericArtContainer from '../containers/artSearchResult/testGenericArtContainer';

export interface ResultsPageProps {}

const ResultsPage: React.SFC<ResultsPageProps> = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ArtSearchResultContainer />
    </div>
  );
};

export default ResultsPage;
