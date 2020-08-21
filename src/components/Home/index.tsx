import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'mobx-router';
import views from '../../config/routes';
import { useContext } from 'react';
import { StoreContext } from '../../context/store-context';

export const Home = observer(() => {
  const store = useContext(StoreContext);
  const { router: { goTo } } = store;

  return (
    <div>
      <h3> Home </h3>

      <Link router={store.router} route={views.gallery}> Go to gallery </Link>

      <br />
      <br />
      <Link router={store.router} route={views.gallery} queryParams={{ start: 5 }}>
        Go to gallery and start from 5th image
        </Link>

      <br />
      <br />

      <Link router={store.router} route={views.document} params={{ id: 456 }} title="Go to document 456" />

      <br />
      <br />

      <Link router={store.router} route={views.document} params={{ id: 999 }}>
        <div style={{ display: 'inline-block' }}>
          Go to document <b> 999 </b>
        </div>
      </Link>

      <br />
      <br />

      <button onClick={() => goTo(views.document, { id: 123 })}> Go to document 123</button>

      <br />
      <br />

      <Link router={store.router} route={views.book} params={{ id: 250, page: 130 }} title="Go to book 250, page 130" />

      <br />
      <br />

      <button onClick={() => goTo(views.userProfile, { username: 'kitze', tab: 'articles' })}>
        go to user kitze
        </button>

    </div>
  );
});
