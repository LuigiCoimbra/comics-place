import React, { useContext } from 'react';
import CardItem from '../../components/CardItem';
import Footer from '../../components/Footer';
import CartIcon from '../../components/CartIcon';
import GlobalStyle from '../../styles/GlobalStyle';
import Navigation from '../../components/Navigation';
import Context from '../../context/Context';
import { Container } from './styles';

function Store() {
  const { data } = useContext(Context);

  return (
    <Container>
      <GlobalStyle />
      <Navigation />
      <CartIcon />
      <div className="card-comic">
        { data.map((product) => (
          <CardItem
            key={product.id}
            product={product}
          />
        )) }
      </div>
      <Footer />
    </Container>
  );
}

export default Store;
