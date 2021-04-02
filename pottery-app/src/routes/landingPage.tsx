import { useState, useEffect } from 'react';
import { Header } from '../components/testHeader';
import { fetchGeneralInfoTableByDocumentId } from '../utilities/firebaseQueries';
import { LANDING_PAGE_INFO_DOC } from '../utilities/firebaseQueryConfig';
import Firebase from 'firebase';
import PageLoaderHoc from '../utilities/hoc/pageLoaderHoc';
import TwoWindowPicture from '../components/tailwindComponents/twoWindowPicture';
import { useHistory } from 'react-router';
export interface LandingPageProps {}

const LandingPage: React.FunctionComponent<LandingPageProps> = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [landingPageInfo, setLandingPageInfo]: any = useState(null);
  useEffect(() => {
    fetchGeneralInfoTableByDocumentId(LANDING_PAGE_INFO_DOC).then(
      (landingPageSnapshot: Firebase.firestore.DocumentSnapshot) => {
        if (landingPageSnapshot.exists) {
          setLandingPageInfo(landingPageSnapshot.data());
        }
        setLoading(false);
      }
    );
  }, []);

  const exploreButtonClickedHandler = (buttonKey: string) => {
    history.push(`/results?category=${buttonKey}`);
  };

  return (
    <div>
      <PageLoaderHoc loading={loading}>
        <Header pageInfo={landingPageInfo} />
        <TwoWindowPicture
          buttonClickedHandler={(buttonKey: string) =>
            exploreButtonClickedHandler(buttonKey)
          }
        />
      </PageLoaderHoc>
    </div>
  );
};

export default LandingPage;
