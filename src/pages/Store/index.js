import React from 'react';
import CardItem from '../../components/CardItem';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import GlobalStyle from '../../styles/GlobalStyle';

function Store() {
  return (
    <div>
      <GlobalStyle />
      <Navigation
        home
      />
      <CardItem />
      <Footer />
    </div>
  );
}

export default Store;
