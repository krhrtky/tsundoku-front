import { auth as firebaseAuth } from 'firebase';

const getUser = () => {
  const auth = firebaseAuth();
  return auth.currentUser;
};

const defineAnonymousUser = () => {
  firebaseAuth()
    .signInAnonymously()
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        alert('You must enable Anonymous auth in the Firebase Console.');
      } else {
        console.error(error);
      }
    });
};

const init = () => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
    } else {
      console.log('logout');
    }
  });

  const user = getUser();
  if (!user) {
    console.log(user);
    defineAnonymousUser();
  }
};

export const Auth = {
  init
};
