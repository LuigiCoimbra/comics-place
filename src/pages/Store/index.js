import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import GlobalStyle from '../../styles/GlobalStyle';

function Store() {
  return (
    <div>
      <GlobalStyle />
      <Navigation
        title="cinnecta"
      />
      <Header />
      <section />
    </div>
  );
}

export default Store;
