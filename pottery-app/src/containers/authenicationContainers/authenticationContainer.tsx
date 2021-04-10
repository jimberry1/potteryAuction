import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SignInCard from '../../components/tailwindComponents/SignInCard';
import { auth, provider } from '../../firebase';
import firebase from 'firebase';
import {
  fetchUserByUserId,
  updateUserInformationForUserId,
} from '../../utilities/firebaseQueries';
import {
  setUser,
  setUserFromFirebaseUserSnapshot,
} from '../../store/actions/userActions';
import { userType } from '../../types';
import { LOCAL_STORAGE_ID_KEY } from '../../configuration/staticVariableNames/databaseTableAndFieldNames';
import { AnimatePresence, motion } from 'framer-motion';
import { authenticationCardDropInVariants } from '../../styles/animations';
import { toggleAuthenticationContainer } from '../../store/actions/adminActions';

export interface AuthenticationContainerProps {}

const AuthenticationContainer: React.SFC<AuthenticationContainerProps> = () => {
  const localStorageUid: string | null = localStorage.getItem(
    LOCAL_STORAGE_ID_KEY
  );
  const [createAnAccount, setCreateAnAccount] = useState(false);
  const [email, setEmail] = useState('');
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    signIn(e);
  };

  if (localStorageUid !== null) {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        fetchUserByUserId(localStorageUid).then((docSnapshot) => {
          dispatch(setUserFromFirebaseUserSnapshot(docSnapshot));
        });
      } else {
        console.log(
          'Attempted to log in using local storage id key that was not valid'
        );
        localStorage.removeItem(LOCAL_STORAGE_ID_KEY);
      }
    });
  }

  const signIn = (e: any) => {
    e.preventDefault();

    if (createAnAccount) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          console.log(err);
          //   displayErrorHandler(err.message);
        })
        .then((result: any) => {
          if (result) {
            const userInformation: userType = {
              forename: forename,
              surname: surname,
              emailAddress: email,
              isAdmin: false,
              timestamp: null,
              artistId: '',
            };
            updateUserInformationForUserId(result.user.uid, userInformation);
            dispatch(setUser(result.user.uid, userInformation));
            localStorage.setItem(LOCAL_STORAGE_ID_KEY, result.user.uid);
          }
        })
        .catch((err) => {
          console.log(err);
          //   displayErrorHandler(err.message);
        });
    } else if (!createAnAccount) {
      auth
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          console.log(err);
          //   displayErrorHandler(err.message);
        })
        .then((result: any) => {
          fetchUserByUserId(result.user.uid).then((docSnapshot: any) => {
            if (docSnapshot.exists) {
              dispatch(setUserFromFirebaseUserSnapshot(docSnapshot));
              dispatch(toggleAuthenticationContainer(false));
              localStorage.setItem(LOCAL_STORAGE_ID_KEY, result.user.uid);
            } else {
              console.log(
                "This is the weird case where the user is signing in but actually they don't exist in the user database table"
              );
              const userInformation: userType = {
                forename: forename,
                surname: surname,
                emailAddress: email,
                isAdmin: false,
                artistId: '',
                timestamp: null,
                photoURL: '',
              };

              updateUserInformationForUserId(result.user.uid, userInformation);
              localStorage.setItem(LOCAL_STORAGE_ID_KEY, result.user.uid);
              dispatch(setUser(result.user.uid, userInformation));
              dispatch(toggleAuthenticationContainer(false));
              //   formSubmittedSuccessfullyHandler();
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result: any) => {
        fetchUserByUserId(result.user.uid).then(
          (docSnapshot: firebase.firestore.DocumentSnapshot) => {
            if (docSnapshot.exists) {
              console.log('This user already exists');
              localStorage.setItem(LOCAL_STORAGE_ID_KEY, result.user.uid);
              dispatch(setUserFromFirebaseUserSnapshot(docSnapshot));
              dispatch(toggleAuthenticationContainer(false));
            } else {
              updateUserInformationForUserId(result.user.uid, {
                forename: result.additionalUserInfo.profile.given_name,
                surname: result.additionalUserInfo.profile.family_name,
                emailAddress: result.user.email,
                artistId: '',
                isAdmin: false,
                timestamp: null,
                photoURL: result.user.photoURL,
              });

              localStorage.setItem(LOCAL_STORAGE_ID_KEY, result.user.uid);

              dispatch(
                setUser(result.user.uid, {
                  forename: result?.additionalUserInfo?.profile?.given_name,
                  surname: result?.additionalUserInfo?.profile?.family_name,
                  emailAddress: result.user.email,
                  artistId: '',
                  isAdmin: false,
                  timestamp: null,
                  photoURL: result.user.photoURL,
                })
              );
              dispatch(toggleAuthenticationContainer(false));
            }
          }
        );
      })
      .catch((error) => {
        alert(error.messsage);
      });
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: '100vw',
        zIndex: 100,
      }}
    >
      <AnimatePresence>
        <motion.div
          variants={authenticationCardDropInVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <SignInCard
            forename={forename}
            forenameChanged={(newValue: string) => setForename(newValue)}
            surname={surname}
            surnameChanged={(newValue: string) => setSurname(newValue)}
            email={email}
            emailChanged={(newValue: string) => setEmail(newValue)}
            password={password}
            passwordChanged={(newValue: string) => setPassword(newValue)}
            confirmPassword={confirmPassword}
            confirmPasswordChanged={(newValue: string) =>
              setConfirmPassword(newValue)
            }
            createAnAccount={createAnAccount}
            createAnAccountChanged={() =>
              setCreateAnAccount((curVal) => !curVal)
            }
            submitFormClicked={(e) => submitFormHandler(e)}
            signInWithGoogleClicked={signInWithGoogle}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AuthenticationContainer;
