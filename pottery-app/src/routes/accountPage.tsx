import { useSelector, useDispatch } from 'react-redux';
import BoldPageTitle from '../components/boldPageTitle';
import AccountPageArtistContainer from '../containers/accountContainers/accountPageArtistContainer';
import { toggleAuthenticationContainer } from '../store/actions/adminActions';
import {
  userArtistIdStateSelector,
  userIdStateSelector,
} from '../store/storeUtilities';
import PurpleButton from '../UI/buttons/purpleButton';
export interface AccountPageProps {}

const AccountPage: React.SFC<AccountPageProps> = () => {
  const userId = useSelector(userIdStateSelector);
  const artistId = useSelector(userArtistIdStateSelector);
  const dispatch = useDispatch();

  console.log(artistId);
  if (!userId) {
    return (
      <div>
        <BoldPageTitle
          title="This is the accounts page"
          subtitle="Sign in to access the features of this page"
        />
        <PurpleButton
          buttonText="Sign in"
          clicked={() => dispatch(toggleAuthenticationContainer(true))}
        />
      </div>
    );
  } else
    return (
      <div>
        {artistId ? (
          <AccountPageArtistContainer artistId={artistId} />
        ) : (
          <div>
            <BoldPageTitle
              title="Create an artist profile"
              subtitle="In order to sell wares on this site you need to register an artist profile. Click the button below to get started. Please note that before sales can begin your account will need to be approved by an admin."
            />
            <PurpleButton buttonText="Create profile" clicked={() => {}} />
          </div>
        )}
      </div>
    );
};

export default AccountPage;
