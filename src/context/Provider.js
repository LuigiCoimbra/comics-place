import React, { useEffect, useState } from 'react';
import { requestComics } from '../services';
import Context from './Context';
import { getItemsFromLocalStorage } from '../utils/localStorageHelpers';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const updateItemCount = () => {
    const items = getItemsFromLocalStorage('cartItems');

    const test = items.reduce((acc, { amount }) => acc + amount, 0);

    setItemCount(test);
  };

  useEffect(() => {
    updateItemCount();
  }, []);

  useEffect(() => {
    const getApi = async () => {
      const comics = await requestComics();
      const { data: { results } } = comics;
      setData(results);
    };
    getApi();
  }, []);

  const context = {
    data,
    itemCount,
    updateItemCount,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

export default Provider;
