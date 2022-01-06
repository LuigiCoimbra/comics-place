import React, { useEffect, useState } from 'react';
import { requestComics } from '../services';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [itemsCart, setItemsCart] = useState({
    products: [],
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (id, title, price, thumbnail) => {
    setItemsCart({
      ...itemsCart,
      products: [
        ...itemsCart.products,
        {
          id,
          title,
          price,
          thumbnail,
        },
      ],
    });
    const value = price.map((item) => item.price);
    setTotalPrice(Number(totalPrice) + Number(value));
  };

  console.log(totalPrice);

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
    itemsCart,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

export default Provider;
