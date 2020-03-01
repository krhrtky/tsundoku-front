import { createLocalStorage } from 'localstorage-ponyfill';

let localStorage: Storage | undefined = undefined;

const injectLocalStorage: (newStorage: Storage) => void = newStorage =>
  (localStorage = newStorage);

const getLocalStorage: () => Storage = () =>
  localStorage == null ? createLocalStorage({ mode: 'memory' }) : localStorage;

export const LocalStorage = {
  injectLocalStorage,
  getLocalStorage
};
