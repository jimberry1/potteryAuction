import { useState } from 'react';
import BoldPageTitle from '../components/boldPageTitle';
import { useSelector } from 'react-redux';
import { userArtistIdStateSelector } from '../store/storeUtilities';
import {
  useAuthenicateAndReturnUserId,
  useAuthenticateToggle,
} from '../utilities/customHooks/authenicateUser';
import PageLoaderHoc from '../utilities/hoc/pageLoaderHoc';
import CreateArtistProfileContainer from '../containers/artistContainers/createArtistProfileContainer';

export interface CreateArtistProfilePageProps {}

const CreateArtistProfilePage: React.SFC<CreateArtistProfilePageProps> = () => {
  const artistId = useSelector(userArtistIdStateSelector);
  const userId: string = useAuthenicateAndReturnUserId();
  const [
    artistProfileSubmittedSuccessfully,
    setArtistProfileSubmittedSuccessfully,
  ] = useState(false);

  if (artistProfileSubmittedSuccessfully) {
    <BoldPageTitle
      title="Artist profile submitted successfully!"
      subtitle="Your profile has been sent to our administrators for review. Once your profile has been approved you will be able to upload and sell artwork."
    />;
  }

  if (artistId) {
    if (artistProfileSubmittedSuccessfully) {
      return (
        <BoldPageTitle
          title="Artist profile submitted successfully!"
          subtitle="Your profile has been sent to our administrators for review. Once your profile has been approved you will be able to upload and sell artwork."
        />
      );
    } else
      return (
        <BoldPageTitle
          title="Profile already exists!"
          subtitle="It appears you already have an artist profile. If you think this is a mistake please contact a member of our support team."
        />
      );
  }

  return (
    <div>
      <PageLoaderHoc loading={userId ? false : true}>
        <CreateArtistProfileContainer
          userId={userId}
          artistProfileSubmittedSuccessfully={() =>
            setArtistProfileSubmittedSuccessfully(true)
          }
        />
      </PageLoaderHoc>
    </div>
  );
};

export default CreateArtistProfilePage;
