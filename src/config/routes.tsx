import React from 'react';

//models
import { Route } from 'mobx-router';

//components
import { Home } from '../components/Home';
import { Document } from '../components/Document';
import { Gallery } from '../components/Gallery';
import { Book } from '../components/Book';
import { UserProfile } from '../components/UserProfile';
import { RootStore } from '../mobx/store';

const routes = {
  home: new Route<RootStore>({
    path: '/',
    component: <Home />
  }),
  userProfile: new Route<RootStore, {
    username: string;
    tab?: string;
  }>({
    path: '/profile/:username/:tab',
    component: <UserProfile />,
    onEnter: (_, { username, tab }) => {
      console.log(`entering ${username} user profile! (Tab: ${tab})`);
    },
    beforeExit: () => {
      console.log('exiting user profile!');
    },
    onParamsChange: (route, params) => {
      console.log('params changed to', params);
    }
  }),
  gallery: new Route<RootStore, any, any>({
    path: '/gallery',
    component: <Gallery />,
    beforeExit: () => {
      const result = window.confirm('Are you sure you want to leave the gallery?');
      return result;
    },
    onEnter: (route, params, store, queryParams) => {
      console.log('queryParams', queryParams);
    }
  }),
  document: new Route<RootStore, {}, { id: number }>({
    path: '/document/:id',
    component: <Document />,
    beforeEnter: (route, params, store) => {
      const userIsLoggedIn = store.app.user;
      if (!userIsLoggedIn) {
        alert('Only logged in users can enter this route!');
        return false;
      }
    },
    onEnter: (route, params) => {
      console.log(`entering document with params`, params);
    }
  }),
  book: new Route<RootStore, {}, {
    id: string,
    page: string,
  }>({
    path: '/book/:id/page/:page',
    component: <Book />,
    onEnter: (route, params, store) => {
      console.log(`entering book with params`, params);
      store.app.setTitle(route.title);
    }
  })
};
export default routes;