import React from 'react';
import CardItem from '../../components/CardItem';
import Footer from '../../components/Footer';
import CartIcon from '../../components/CartIcon';
import GlobalStyle from '../../styles/GlobalStyle';
import Navigation from '../../components/Navigation';

function Store() {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <CartIcon />
      <CardItem />
      <Footer />
    </div>
  );
}

export default Store;
