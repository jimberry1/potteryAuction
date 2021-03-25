import SearchFilterBar from '../components/searchFilterBar';
import ArtCard from '../components/tailwindComponents/artCard';
import TestGenericArtContainer from '../containers/testGenericArtContainer';

export interface ResultsPageProps {}

const ResultsPage: React.SFC<ResultsPageProps> = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      This is the results page
      <SearchFilterBar />
      {/* <ArtCard artworkId="zPuI9bPxhIXvmYddnnKY" /> */}
      <TestGenericArtContainer />
    </div>
  );
};

export default ResultsPage;
