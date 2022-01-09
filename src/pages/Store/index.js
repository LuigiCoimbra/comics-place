import React, { useContext } from 'react';
import CardProduct from '../../components/CardProduct';
import Footer from '../../components/Footer';
import CartIcon from '../../components/CartIcon';
import GlobalStyle from '../../styles/GlobalStyle';
import TopBar from '../../components/TopBar';
import Context from '../../context/Context';
import { Container } from './styles';

function Store() {
  const { data } = useContext(Context);

  return (
    <Container>
      <GlobalStyle />
      <TopBar />
      <CartIcon />
      <main className="card-comic">
        { data.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
          />
        )) }
      </main>
      <Footer />
    </Container>
  );
}

export default Store;
