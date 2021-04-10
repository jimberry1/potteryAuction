import * as React from 'react';
import { useState, useEffect } from 'react';
import BoldPageTitle from '../../components/boldPageTitle';
import CreateArtistProfileForm from '../../components/forms/createArtistProfileForm';
import { artistType, charityType } from '../../types';
import {
  addArtistToFirebase,
  addArtistToFirebaseAndUpdateUserWithArtistId,
  fetchCharitiesWithLimit,
} from '../../utilities/firebaseQueries';
import { useDispatch } from 'react-redux';
import { setArtistIdOnUser } from '../../store/actions/userActions';
export interface CreateArtistProfileContainerProps {
  userId: string;
  artistProfileSubmittedSuccessfully: () => void;
}

const CreateArtistProfileContainer: React.SFC<CreateArtistProfileContainerProps> = ({
  userId,
  artistProfileSubmittedSuccessfully,
}) => {
  const dispatch = useDispatch();
  const [artistProfile, setArtistProfile] = useState<artistType>({
    firstName: '',
    surname: '',
    userId: userId,
    profileDescription: '',
    photoURL: '',
    location: '',
    isApproved: false,
    isSuspended: false,
    charityId: '',
    charityName: '',
    charityDonationPercentage: 0,
  });
  const [highlightMandatoryFields, setHighlightMandatoryFields] = useState(
    false
  );
  const [charites, setCharities] = useState<
    { id: string; data: charityType }[]
  >([]);

  // Get details of charities from firebase to facilitate the user chosing their desired charity
  useEffect(() => {
    fetchCharitiesWithLimit(50).then((charitiesSnapshot: any) => {
      console.log(charitiesSnapshot);
      setCharities(
        charitiesSnapshot.docs.map((charity: any) => ({
          id: charity.id,
          data: charity.data(),
        }))
      );
    });
  }, []);

  const submitFormHandler = () => {
    console.log('invoked');
    if (validateArtistProfile(artistProfile)) {
      addArtistToFirebaseAndUpdateUserWithArtistId(artistProfile, userId).then(
        (artistId) => {
          artistProfileSubmittedSuccessfully();
          dispatch(setArtistIdOnUser(artistId));
        }
      );
    } else {
      setHighlightMandatoryFields(true);
    }
  };
  return (
    <div>
      <div>
        <BoldPageTitle title="Create an artist profile" />
        <CreateArtistProfileForm
          artistProfileInformation={artistProfile}
          profileDescriptionChanged={(newVal: string) =>
            setArtistProfile((artistProfile) => ({
              ...artistProfile,
              profileDescription: newVal,
            }))
          }
          firstNameChanged={(newVal: string) =>
            setArtistProfile((artistProfile) => ({
              ...artistProfile,
              firstName: newVal,
            }))
          }
          surnameChanged={(newVal: string) =>
            setArtistProfile((artistProfile) => ({
              ...artistProfile,
              surname: newVal,
            }))
          }
          locationChanged={(newVal: string) =>
            setArtistProfile((artistProfile) => ({
              ...artistProfile,
              location: newVal,
            }))
          }
          selectedCharityChanged={(charityId: string) =>
            setArtistProfile((artistProfile) => ({
              ...artistProfile,
              charityId: charityId,
              charityName:
                charites.filter((charity) => charity.id === charityId)[0]?.data
                  .charityName || '',
            }))
          }
          charityDonationPercentageChanged={(newVal: number) =>
            setArtistProfile((artistProfile) => ({
              ...artistProfile,
              charityDonationPercentage: newVal,
            }))
          }
          formSubmittedClicked={submitFormHandler}
          highlightMandatoryFields={highlightMandatoryFields}
          charities={charites}
        />
      </div>
    </div>
  );
};

export default CreateArtistProfileContainer;

function validateArtistProfile(artistProfile: artistType) {
  let isValid = true;

  isValid = isValid && artistProfile.firstName.length > 0;
  isValid = isValid && artistProfile.surname.length > 0;
  isValid = isValid && artistProfile.location.length > 0;
  isValid = isValid && artistProfile.profileDescription.length > 0;
  isValid = isValid && artistProfile.userId.length > 0;
  isValid = isValid && artistProfile.charityName.length > 0;
  isValid = isValid && artistProfile.charityId.length > 0;
  isValid = isValid && artistProfile.charityDonationPercentage > 0;

  return isValid;
}
