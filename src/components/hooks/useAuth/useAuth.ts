import router from 'next/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => router.push('/users/signIn');

const signOut = () =>
  firebase
    .auth()
    .signOut()
    .then(() => router.push('/'))
    .catch(error => console.error(error));

export const useAuth = () => ({
  signIn,
  signOut
});
