import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { useRouter } from 'next/router';

type Props = {
  signInSuccessUrl?: string;
};

const SignIn: React.FC<Props> = ({ signInSuccessUrl = '/' }) => {
  const router = useRouter();

  const uiConfig: firebaseui.auth.Config = {
    autoUpgradeAnonymousUsers: true,
    popupMode: true,
    signInFlow: 'popup',
    signInSuccessUrl,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // signInFailure callback must be provided to handle merge conflicts which
      // occur when an existing credential is linked to an anonymous user.
      signInFailure: error => {
        // For merge conflicts, the error.code will be
        // 'firebaseui/anonymous-upgrade-merge-conflict'.
        if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
          return Promise.resolve();
        }
        // The credential the user tried to sign in with.
        const cred = error.credential;
        // Copy data from anonymous user to permanent user and delete anonymous
        // user.
        // ...
        // Finish sign-in after data is copied.
        return firebase
          .auth()
          .signInWithCredential(cred)
          .then(() => {
            router.push('/');
          });
      }
    }
  };
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
};

export default SignIn;
