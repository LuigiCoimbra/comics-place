import React, { useEffect, useState } from 'react';
import { requestComics } from '../services';
import Context from './Context';
import { getItemsFromLocalStorage, saveItemToLocalStorage } from '../utils/localStorageHelpers';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const updateItemCount = () => {
    const items = getItemsFromLocalStorage('cartItems');

    const test = items.reduce((acc, { amount }) => acc + amount, 0);

    setItemCount(test);
  };

  const addToCart = (product, setIsAtCart, isAtCart) => {
    const items = getItemsFromLocalStorage('cartItems');

    if (!isAtCart) {
      const newItems = [...items, { ...product, amount: 1 }];

      setIsAtCart(true);
      saveItemToLocalStorage('cartItems', newItems);
      updateItemCount();
    } else {
      const newItems = items.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      saveItemToLocalStorage('cartItems', newItems);
      updateItemCount();
    }
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
    addToCart,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

export default Provider;
