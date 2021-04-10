import * as React from 'react';
import { useState, useEffect } from 'react';
import BoldPageTitle from '../../components/boldPageTitle';
import AdminPageArtistPendingApprovalTable from '../../components/tailwindComponents/adminPageArtistPendingApprovalTable';
import { artistType } from '../../types';
import {
  fetchArtistProfilesPendingApproval,
  fetchArtistProfilesPendingApprovalSnapshot,
  updateArtistProfileAsActiveForArtistId,
} from '../../utilities/firebaseQueries';

export interface AdminPendingArtistProfileRequestsContainerProps {}

interface artistsState {
  id: string;
  data: artistType;
}
const AdminPendingArtistProfileRequestsContainer: React.SFC<AdminPendingArtistProfileRequestsContainerProps> = () => {
  const [pendingArtistProfiles, setPendingArtistProfiles] = useState<
    artistsState[]
  >([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // fetchArtistProfilesPendingApproval().then((artists: any) => {
    //   setPendingArtistProfiles(
    //     artists.docs.map((artist: any) => ({
    //       id: artist.id,
    //       data: artist.data(),
    //     }))
    //   );
    // });

    const snapshot = fetchArtistProfilesPendingApprovalSnapshot(
      setPendingArtistProfiles
    );
  }, []);

  const tableRowClickedHandler = (artistId: string) => {
    console.log(`Table row with id= ${artistId} clicked`);
  };

  const approveArtistProfileHandler = (artistId: string) => {
    updateArtistProfileAsActiveForArtistId(artistId);
  };
  return (
    <div>
      <BoldPageTitle title="Pending Artist Profiles" />
      <div className="overflow-x-auto p-2">
        <AdminPageArtistPendingApprovalTable
          artistsData={pendingArtistProfiles}
          tableRowClicked={(artistId: string) => {
            tableRowClickedHandler(artistId);
          }}
          approveArtistProfileClicked={approveArtistProfileHandler}
        />
      </div>
    </div>
  );
};

export default AdminPendingArtistProfileRequestsContainer;
