import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { StoreContext } from '../../context/store-context';

//style
export const Document = observer(() => {

  const { router: { params } } = useContext(StoreContext);

  return (
    <div>
      <h3> Document </h3>
      <div> with id: {params?.id} </div>
    </div>
  );
});
