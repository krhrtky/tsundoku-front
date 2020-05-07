import * as firebase from 'firebase/app';
import 'firebase/performance';
import 'firebase/auth';
import getConfig from 'next/config';
import { pipe } from 'fp-ts/lib/pipeable';
import { fromNullable, getOrElse, map } from 'fp-ts/lib/Option';

const firebaseConfig = pipe(
  getConfig(),
  fromNullable,
  map(nextConfig => nextConfig.publicRuntimeConfig),
  map(publicRuntimeConfig => publicRuntimeConfig.firebaseConfig),
  getOrElse(() => ({}))
);

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
    firebase.auth(app);
    firebase.firestore(app);
    if (typeof window !== 'undefined') {
      firebase.performance();
    }
  }
};

export const Firebase = {
  isUnavailable,
  init
};
