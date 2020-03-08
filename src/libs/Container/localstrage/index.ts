import { createLocalStorage } from 'localstorage-ponyfill';

let localStorage: Storage | undefined = undefined;
let serverInMemory: Storage | undefined = undefined;

const injectLocalStorage: (newStorage: Storage) => void = newStorage =>
  (localStorage = newStorage);

const injectServerInMemory: (newStorage: Storage) => void = newStorage =>
  (serverInMemory = newStorage);

const getLocalStorage: () => Storage = () =>
  localStorage == null ? createLocalStorage({ mode: 'browser' }) : localStorage;

const getServerInMemory: () => Storage = () =>
  serverInMemory == null
    ? createLocalStorage({ mode: 'node' })
    : serverInMemory;

const getStorage: () => Storage = () =>
  typeof window === 'undefined' ? getServerInMemory() : getLocalStorage();

export const LocalStorage = {
  injectLocalStorage,
  injectServerInMemory,
  getStorage
};
