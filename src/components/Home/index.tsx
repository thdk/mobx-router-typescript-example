import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'mobx-router-typescript';
import views from '../../config/routes';
import { useContext } from 'react';
import { StoreContext } from '../../context/store-context';

export const Home = observer(() => {
  const store = useContext(StoreContext);
  const { router: { goTo } } = store;

  return (
    <div>
      <h3> Home </h3>

      <Link view={views.gallery} store={store}> Go to gallery </Link>

      <br />
      <br />
      <Link view={views.gallery} store={store} queryParams={{ start: 5 }}>
        Go to gallery and start from 5th image
        </Link>

      <br />
      <br />

      <Link view={views.document} params={{ id: 456 }} title="Go to document 456" store={store} />

      <br />
      <br />

      <Link view={views.document} params={{ id: 999 }} store={store}>
        <div style={{ display: 'inline-block' }}>
          Go to document <b> 999 </b>
        </div>
      </Link>

      <br />
      <br />

      <button onClick={() => goTo(views.document, { id: 123 }, store)}> Go to document 123</button>

      <br />
      <br />

      <Link view={views.book} params={{ id: 250, page: 130 }} title="Go to book 250, page 130" store={store} />

      <br />
      <br />

      <button onClick={() => goTo(views.userProfile, { username: 'kitze', tab: 'articles' }, store)}>
        go to user kitze
        </button>

    </div>
  );
});
