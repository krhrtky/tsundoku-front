import * as firebase from 'firebase';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

if (firebase.apps.length) {
  firebase.app();
} else {
  const app = firebase.initializeApp(publicRuntimeConfig.firebase);
  firebase.performance(app);
  firebase.auth(app);
  firebase.firestore(app);
}
