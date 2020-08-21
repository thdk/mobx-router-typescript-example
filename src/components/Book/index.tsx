import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { StoreContext } from '../../context/store-context';

export const Book = observer(() => {
  const { router: { params } } = useContext(StoreContext);

  return (
    <div>
      <h1> Book {params?.id} </h1>
      <h3> Page: {params?.page} </h3>
    </div>
  );
});
