import React, { useContext } from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import Navigation from '../../components/Navigation';
import Context from '../../context/Context';
// import { Container } from './styles';

function Cart() {
  const { itemsCart: { products } } = useContext(Context);

  const renderProduct = () => {
    if (products.length <= 0) {
      return <div>Carrinho Vazio</div>;
    }
    return (products.map(({ title, thumbnail, price }, index) => (
      <div key={index}>
        <h1>{title}</h1>
        {price.map((item) => (
          <span>{item.price}</span>
        ))}
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={title}
          width="386.656px"
          height="386.656px"
        />
      </div>
    )));
  };

  return (
    <div>
      <GlobalStyle />
      <Navigation />
      { renderProduct() }
    </div>
  );
}

export default Cart;
