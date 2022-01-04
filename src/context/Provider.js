import React, { useEffect, useState } from 'react';
import { requestComics } from '../services';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [itemsCart, setItemsCart] = useState({
    products: [],
  });

  const addToCart = (items) => {
    setItemsCart({
      ...itemsCart,
      products: [
        ...itemsCart.products,
        {
          items,
        },
      ],
    });
  };

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
    addToCart,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

export default Provider;
