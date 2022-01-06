import React, { useContext, useEffect, useState } from 'react';
import CardItem from '../../components/CardItem';
import Footer from '../../components/Footer';
import CartIcon from '../../components/CartIcon';
import GlobalStyle from '../../styles/GlobalStyle';
import Navigation from '../../components/Navigation';
import Context from '../../context/Context';
import { getItemsFromLocalStorage } from '../../utils/localStorageHelpers';

function Store() {
  const { data } = useContext(Context);
  const [itemCount, setItemCount] = useState(0);

  const updateItemCount = () => {
    const items = getItemsFromLocalStorage('cartItems');

    const test = items.reduce((acc, { amount }) => acc + amount, 0);

    setItemCount(test);
  };

  useEffect(() => {
    updateItemCount();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <CartIcon itemCount={itemCount} />
      { data.map((product) => (
        <CardItem
          key={product.id}
          product={product}
          updateItemCount={updateItemCount}
        />
      )) }
      <Footer />
    </div>
  );
}

export default Store;
