import SearchFilterBar from '../components/searchFilterBar';
import ArtCard from '../components/tailwindComponents/artCard';
import TestGenericArtContainer from '../containers/testGenericArtContainer';

export interface ResultsPageProps {}

const ResultsPage: React.SFC<ResultsPageProps> = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SearchFilterBar />
      <TestGenericArtContainer />
    </div>
  );
};

export default ResultsPage;
