import { createLocalStorage } from 'localstorage-ponyfill';
import { isServer } from '@/libs/Env';

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
    ? createLocalStorage({ mode: 'memory' })
    : serverInMemory;

const getStorage: () => Storage = () =>
  isServer() ? getServerInMemory() : getLocalStorage();

export const LocalStorage = {
  injectLocalStorage,
  injectServerInMemory,
  getStorage
};
