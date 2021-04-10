import { artistType } from '../../types';
import Loader from 'react-loader-spinner';
export interface AdminPageArtistPendingApprovalTableProps {
  artistsData: { id: string; data: artistType }[];
  tableRowClicked: (id: string) => void;
  approveArtistProfileClicked: (artistId: string) => void;
}

const AdminPageArtistPendingApprovalTable: React.SFC<AdminPageArtistPendingApprovalTableProps> = ({
  artistsData,
  tableRowClicked,
  approveArtistProfileClicked,
}) => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="-my-2  sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Profile
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Charity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      % donation
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {artistsData.map((artist) => {
                    return (
                      <AdminTableArtistRow
                        key={artist.id}
                        data={artist.data}
                        clicked={() => {
                          tableRowClicked(artist.id);
                        }}
                        approveArtistProfileClicked={() =>
                          approveArtistProfileClicked(artist.id)
                        }
                      />
                    );
                  })}
                </tbody>
                {!artistsData[0] && (
                  <tbody>
                    <tr className="w-full">
                      <td colSpan={5}>
                        <div className="flex-col justify-center items-center content-center	text-center w-full">
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              margin: '10px 0px',
                            }}
                          >
                            <Loader
                              type="TailSpin"
                              color="#00BFFF"
                              height={100}
                              width={100}
                              timeout={500}
                            />
                          </div>
                          No pending artist profiles found
                        </div>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageArtistPendingApprovalTable;

interface artistRowProps {
  data: artistType;
  clicked: () => void;
  approveArtistProfileClicked: () => void;
}
const AdminTableArtistRow: React.FunctionComponent<artistRowProps> = ({
  data,
  clicked,
  approveArtistProfileClicked,
}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={data.photoURL}
              alt="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{`${data.firstName} ${data.surname}`}</div>
            <div className="text-sm text-gray-500">{data.location}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {data.profileDescription.substr(0, 40).concat('...')}
        </div>
        {/* <div className="text-sm text-gray-500">Optimization</div> */}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {data.charityName}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
        {data.charityDonationPercentage}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          className="text-indigo-600 hover:text-green-900"
          onClick={approveArtistProfileClicked}
        >
          Approve
        </button>
      </td>
    </tr>
  );
};
