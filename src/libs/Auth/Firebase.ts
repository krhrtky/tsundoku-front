import * as firebase from 'firebase';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

if (firebase.apps.length) {
  firebase.app();
} else {
  console.log(Object.values(publicRuntimeConfig.firebase));
  const app = firebase.initializeApp(publicRuntimeConfig.firebase);
  firebase.performance(app);
  firebase.auth(app);
}
