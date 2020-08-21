import React from 'react';
import ReactDOM from 'react-dom';
import { MobxRouter, startRouter } from 'mobx-router';

import { StoreProvider } from "./context/store-context";

//mobx
import store from './mobx/store';

//router
import routes from './config/routes';

startRouter(routes, store, {
  html5history: false, // or false if you want to use hash based routing
});

ReactDOM.render(
  <StoreProvider value={store}>
    <div>
      <h1>{store.app.title}</h1>
      <button onClick={() => store.router.goTo(routes.home)}> go home</button>
      <MobxRouter store={store} />
    </div>
  </StoreProvider>, document.getElementById('root')
)