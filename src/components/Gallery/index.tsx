import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { isEmpty, map } from 'lodash';
import { StoreContext } from '../../context/store-context';

export const Gallery = observer(() => {
  const store = useContext(StoreContext);
  const { router: { queryParams } } = store;

  return (
    <div>
      <h3>Gallery </h3>
      {
        !isEmpty(queryParams) && <ul>
          {
            map(queryParams, (param, key) => <li key={key} > <span>{key} </span> - <b>{param}</b > </li>)}
        </ul>
      }
    </div>
  );
});
