import React from 'react';
import CardItem from '../../components/CardItem';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import GlobalStyle from '../../styles/GlobalStyle';

function Store() {
  return (
    <div>
      <GlobalStyle />
      <Navigation
        title="cinnecta"
        home
      />
      <Header />
      <CardItem />
      <Footer />
    </div>
  );
}

export default Store;
