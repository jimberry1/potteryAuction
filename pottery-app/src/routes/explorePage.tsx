import ExplorePageHeader from '../components/tailwindComponents/explorePageHeader';
import TwoWindowPicture from '../components/tailwindComponents/twoWindowPicture';

export interface ExplorePageProps {}

const ExplorePage: React.SFC<ExplorePageProps> = () => {
  return (
    <div>
      <ExplorePageHeader />
      <TwoWindowPicture />
    </div>
  );
};

export default ExplorePage;
