import * as firebase from 'firebase';

const firebaseConfig = {};

if (firebase.apps.length) {
  firebase.app();
} else {
  const app = firebase.initializeApp(firebaseConfig);
  firebase.performance(app);
  const auth = firebase.auth(app);
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user);
    } else {
      auth.signInAnonymously().catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          alert('You must enable Anonymous auth in the Firebase Console.');
        } else {
          console.error(error);
        }
      });
    }
  });
}
