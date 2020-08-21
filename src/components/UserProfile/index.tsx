import React, { useContext } from 'react';
import { map } from 'lodash';
import { observer } from 'mobx-react-lite';
import views from '../../config/routes';
import { StoreContext } from '../../context/store-context';

export const UserProfile = observer(() => {
  const store = useContext(StoreContext);
  const { router: { params, goTo } } = store;

  const tabs = [
    {
      name: 'Articles',
      id: 'articles',
    },
    {
      name: 'Following',
      id: 'following'
    },
    {
      name: 'Followers',
      id: 'followers'
    }
  ];

  return (
    <div>
      <h1>User profile for: {params?.username} </h1>

      <h3> Friends: </h3>
      <ul>
        <li>
          <button onClick={() => goTo(views.userProfile, { ...params, username: 'kristijan' }, store)}>
            Kristijan Ristovski
            </button>
        </li>
        <li>
          <button onClick={() => goTo(views.userProfile, { ...params, username: 'john' }, store)}>
            John Doe
                </button>
        </li>
      </ul>

      <h3> Tabs: </h3>

      {
        map(tabs, (tab, key) => <button
          key={key}
          style={{ ...params?.tab === tab.id && { backgroundColor: 'blue', color: 'white' } }}
          onClick={() => goTo(views.userProfile, { ...(params as { username: string, tab?: string }), tab: tab.id }, store)}>
          {tab.name}
        </button>
        )}

      {
        params?.tab === 'articles' && <div>
          <ul>
            <li>Article 1 </li>
            <li> Article 2 </li>
            <li> Article 3 </li>
          </ul>
        </div>
      }

      {
        params?.tab === 'following' && <div>
          <ul>
            <li>John Doe </li>
            <li> John Snow </li>
            <li> John Oliver </li>
          </ul>
        </div>
      }

      {
        params?.tab === 'followers' && <div>
          <ul>
            <li>This guy </li>
            <li> That guy </li>
            <li> That other guy </li>
          </ul>
        </div>
      }

    </div>
  );
});

