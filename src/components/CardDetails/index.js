import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { Container } from './styles';

function CardDetails({ comic }) {
  const { addToCart } = useContext(Context);
  const [isAtCart, setIsAtCart] = useState(false);
  const {
    title, thumbnail, prices, textObjects,
  } = comic;

  return (
    <Container>
      <div className="product-details">
        <h1 className="product-detail-name">{title}</h1>
        <div className="product-main-info">
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={title}
          />
          <div className="product-attributes">
            { prices.map(({ price }, index) => (
              <h1
                key={index}
                className="product-price"
              >
                { `R$ ${Math.round(price).toFixed(2)}`}
              </h1>
            ))}
            <h2>Descrição do Quadrinho</h2>
            {textObjects.map(({ text }, index) => (
              <p key={index} className="descripton">
                {text}
              </p>
            ))}
            <button
              type="button"
              className="add-cart"
              onClick={() => addToCart(comic, setIsAtCart, isAtCart)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CardDetails;
