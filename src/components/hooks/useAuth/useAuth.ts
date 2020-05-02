import router from 'next/router';
import { auth } from 'firebase';

const signIn = () => router.push('/users/signIn');

const signOut = () =>
  auth()
    .signOut()
    .then(() => router.push('/'))
    .catch(error => console.error(error));

export const useAuth = () => ({
  signIn,
  signOut
});
