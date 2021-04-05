import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignInCard from '../components/tailwindComponents/SignInCard';
import db, { auth, provider } from '../firebase';
import firebase from 'firebase';
import {
  fetchUserByUserId,
  updateUserInformationForUserId,
} from '../utilities/firebaseQueries';
import {
  setUser,
  setUserFromFirebaseUserSnapshot,
} from '../store/actions/userActions';
import { userType } from '../types';

export interface AuthenticationContainerProps {}

/**
 * This container will be used to log the user into firebase
 *
 * Needs to be able to create an account, sign in with firebase or use google
 * @returns
 */
const AuthenticationContainer: React.SFC<AuthenticationContainerProps> = () => {
  const localStorageUid: string | null = localStorage.getItem('caf_uid');
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
              artistUid: '',
            };
            updateUserInformationForUserId(result.user.uid, userInformation);
            dispatch(setUser(result.user.uid, userInformation));
            localStorage.setItem('caf_uid', result.user.uid);
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
              localStorage.setItem('caf_uid', result.user.uid);
            } else {
              console.log(
                "This is the weird case where the user is signing in but actually they don't exist in the user database table"
              );
              const userInformation: userType = {
                forename: forename,
                surname: surname,
                emailAddress: email,
                isAdmin: false,
                artistUid: '',
                timestamp: null,
                photoURL: '',
              };

              updateUserInformationForUserId(result.user.uid, userInformation);
              localStorage.setItem('caf_uid', result.user.uid);
              dispatch(setUser(result.user.uid, userInformation));
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
              dispatch(setUserFromFirebaseUserSnapshot(docSnapshot));
            } else {
              updateUserInformationForUserId(result.user.uid, {
                forename: result.additionalUserInfo.profile.given_name,
                surname: result.additionalUserInfo.profile.family_name,
                emailAddress: result.user.email,
                artistUid: '',
                isAdmin: false,
                timestamp: null,
                photoURL: result.user.photoURL,
              });

              dispatch(
                setUser(result.user.uid, {
                  forename: result?.additionalUserInfo?.profile?.given_name,
                  surname: result?.additionalUserInfo?.profile?.family_name,
                  emailAddress: result.user.email,
                  artistUid: '',
                  isAdmin: false,
                  timestamp: null,
                  photoURL: result.user.photoURL,
                })
              );
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
        createAnAccountChanged={() => setCreateAnAccount((curVal) => !curVal)}
        submitFormClicked={(e) => submitFormHandler(e)}
        signInWithGoogleClicked={signInWithGoogle}
      />
    </div>
  );
};

export default AuthenticationContainer;
