import BoldPageTitle from '../components/boldPageTitle';
import AdminPageArtistPendingApprovalTable from '../components/tailwindComponents/adminPageArtistPendingApprovalTable';
import AdminPendingArtistProfileRequestsContainer from '../containers/adminContainers/adminPendingArtistProfileRequestsContainer';

export interface AdminPageProps {}

const AdminPage: React.SFC<AdminPageProps> = () => {
  return (
    <div>
      <BoldPageTitle title="Admin page" />
      <AdminPendingArtistProfileRequestsContainer />
    </div>
  );
};

export default AdminPage;
