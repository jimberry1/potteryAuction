import ArtCard from '../components/tailwindComponents/artCard';

export interface ResultsPageProps {}

const ResultsPage: React.SFC<ResultsPageProps> = () => {
  return (
    <div>
      This is the results page
      <ArtCard artworkId="zPuI9bPxhIXvmYddnnKY" />
    </div>
  );
};

export default ResultsPage;
