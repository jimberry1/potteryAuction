import BoldPageTitle from '../components/boldPageTitle';

export interface AdminPageProps {}

const AdminPage: React.SFC<AdminPageProps> = () => {
  return (
    <div>
      <BoldPageTitle title="Admin page" />
    </div>
  );
};

export default AdminPage;
