import { RouterStore } from 'mobx-router-typescript';
import AppStore from './stores/app-store';

export type RootStore = typeof store;

const store = {
  app: new AppStore(),
  router: new RouterStore()
};

export default store;