import { useSelector, useDispatch } from 'react-redux';
import BoldPageTitle from '../components/boldPageTitle';
import ManageArtistProfileContainer from '../containers/artistContainers/manageArtistProfileContainer';
import PurchasedItemsContainer from '../containers/accountContainers/purchasedItemsContainer';
import { toggleAuthenticationContainer } from '../store/actions/adminActions';
import {
  userArtistIdStateSelector,
  userIdStateSelector,
} from '../store/storeUtilities';
import PurpleButton from '../UI/buttons/purpleButton';
import PageLoaderHoc from '../utilities/hoc/pageLoaderHoc';
export interface AccountPageProps {}

const AccountPage: React.SFC<AccountPageProps> = () => {
  const userId = useSelector(userIdStateSelector);
  const dispatch = useDispatch();

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
        <PageLoaderHoc loading={userId ? false : true}>
          <PurchasedItemsContainer userId={userId} />
        </PageLoaderHoc>
      </div>
    );
};

export default AccountPage;
