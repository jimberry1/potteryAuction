import { useState } from 'react';
import BoldPageTitle from '../components/boldPageTitle';
import { useSelector, useDispatch } from 'react-redux';
import ManageArtistProfileContainer from '../containers/artistContainers/manageArtistProfileContainer';
import PurchasedItemsContainer from '../containers/accountContainers/purchasedItemsContainer';
import { toggleAuthenticationContainer } from '../store/actions/adminActions';
import {
  userArtistIdStateSelector,
  userIdStateSelector,
} from '../store/storeUtilities';
import PurpleButton from '../UI/buttons/purpleButton';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import AddOrEditArtworkContainer from '../containers/artistContainers/addOrEditArtworkContainer';
import ManageArtistArtworks from '../containers/artistContainers/manageArtistArtworks';
export interface ManageArtistProfileProps {}

const ManageArtistProfile: React.SFC<ManageArtistProfileProps> = () => {
  const userId = useSelector(userIdStateSelector);
  // const userId: string = useAuthenicateAndReturnUserId();
  const artistId = useSelector(userArtistIdStateSelector);
  const dispatch = useDispatch();
  const [selectedArtworkId, setSelectedArtworkId] = useState('');
  const [openArtworkEditor, setOpenArtworkEditor] = useState(false);

  const handleToggleAddArtwork = () => {
    if (openArtworkEditor) {
      setOpenArtworkEditor(false);
    } else {
      setSelectedArtworkId('');
      setOpenArtworkEditor(true);
    }
  };

  if (!userId) {
    return (
      <div>
        <BoldPageTitle
          title="This is the Artist profile page"
          subtitle="Sign in to access the features of this page"
        />
        <PurpleButton
          buttonText="Sign in"
          clicked={() => dispatch(toggleAuthenticationContainer(true))}
        />
      </div>
    );
  }
  if (!artistId) {
    return <BoldPageTitle title="You are not an authenticated artist" />;
  } else
    return (
      <div>
        <ManageArtistProfileContainer artistId={artistId} />
        <ManageArtistArtworks artistId={artistId} />

        <div className="flex w-full justify-center mb-4">
          <PurpleButton
            buttonText={openArtworkEditor ? 'Hide form' : 'Add Artwork'}
            clicked={handleToggleAddArtwork}
          />
        </div>
        {openArtworkEditor && (
          <AddOrEditArtworkContainer
            selectedArtworkId={selectedArtworkId}
            userId={userId}
            artistId={artistId}
          />
        )}
      </div>
    );
};

export default ManageArtistProfile;
