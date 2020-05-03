import * as firebase from 'firebase';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { firebaseConfig }
} = getConfig();

const isUnavailable = () =>
  Object.values(firebaseConfig).find(value => value != null) == null;

const init = () => {
  if (isUnavailable()) {
    console.warn(
      'firebase could not initialize. because config is unavailable.'
    );
    return;
  }

  if (firebase.apps.length) {
    firebase.app();
  } else {
    const app = firebase.initializeApp(firebaseConfig);
    firebase.performance(app);
    firebase.auth(app);
    firebase.firestore(app);
  }
};

export const Firebase = {
  isUnavailable,
  init
};
