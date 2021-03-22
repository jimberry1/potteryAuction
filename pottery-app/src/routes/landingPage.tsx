import { useState, useEffect } from 'react';
import LargeImage from '../components/tailwindComponents/largeImage';
import { Header } from '../components/testHeader';
import { fetchGeneralInfoTableByDocumentId } from '../utilities/firebaseQueries';
import { LANDING_PAGE_INFO_DOC } from '../utilities/firebaseQueryConfig';
import Firebase from 'firebase';
import PageLoader from '../UI/pageLoader';
import PageLoaderHoc from '../utilities/hoc/pageLoaderHoc';

export interface LandingPageProps {}

const LandingPage: React.FunctionComponent<LandingPageProps> = () => {
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
  return (
    <div>
      <PageLoaderHoc loading={loading}>
        <Header pageInfo={landingPageInfo} />
        <LargeImage />
      </PageLoaderHoc>
    </div>
  );
};

export default LandingPage;
