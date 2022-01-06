import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import Navigation from '../../components/Navigation';
import { getItemsFromLocalStorage, saveItemToLocalStorage } from '../../utils/localStorageHelpers';
import HomeIcon from '../../components/HomeIcon';
import { Container } from './styles';
import CartItem from '../../components/CartItem';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const items = getItemsFromLocalStorage('cartItems');

  const getTotalPrice = (item) => {
    const sumPrice = item.reduce(
      (acc, curr) => acc + curr.prices.map(({ price }) => price) * curr.amount,
      0,
    );
    const fixedTotalPrice = Number(sumPrice.toFixed(2));
    setTotalPrice(Math.round(fixedTotalPrice).toFixed(2));
    saveItemToLocalStorage('total', fixedTotalPrice);
  };

  const removeItemFromCart = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);

    setCartItems([...newItems]);

    getTotalPrice(newItems);
    saveItemToLocalStorage('cartItems', newItems);
  };

  const updateItemAmount = (quantity, itemId) => {
    const newItems = cartItems.map((item) => {
      if (item.id === itemId) return { ...item, amount: quantity };
      return item;
    });

    setCartItems([...newItems]);
    getTotalPrice(newItems);
    saveItemToLocalStorage('cartItems', newItems);
  };

  const fetchProducts = () => {
    setCartItems(items);
    getTotalPrice(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Navigation />
      <HomeIcon />
      { cartItems.length !== 0 ? (
        cartItems.map((element) => (
          <CartItem
            key={element.id}
            id={element.id}
            title={element.title}
            price={element.prices}
            thumbnail={element.thumbnail}
            amount={element.amount}
            removeItemFromCart={removeItemFromCart}
            updateItemAmount={updateItemAmount}
          />
        ))
      ) : (
        <h1>
          Seu carrinho está vazio ;-;
        </h1>
      )}
      <p>{totalPrice}</p>
    </Container>
  );
}

export default Cart;
