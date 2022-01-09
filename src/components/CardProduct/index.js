import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Card } from './styles';

import {
  getItemsFromLocalStorage,
} from '../../utils/localStorageHelpers';
import Context from '../../context/Context';

function CardProduct({ product }) {
  const { addToCart } = useContext(Context);
  const [isAtCart, setIsAtCart] = useState(false);

  const checkCart = () => {
    const items = getItemsFromLocalStorage('cartItems');

    setIsAtCart(items.some((item) => item.id === product.id));
  };

  useEffect(() => {
    checkCart();
  }, []);

  return (
    <Container>
      { product.title !== 'Marvel Previews (2017)' ? (
        <Card>
          <div className="product-card">
            <Link
              key={product.id}
              to={{ pathname: `/detalhes/${product.id}` }}
              className="link-item"
            >
              <LazyLoadImage
                effect="blur"
                src={`${product.thumbnail.path}.${product.thumbnail.extension}`}
                alt={product.title}
                className="photo-item"
              />
              <p className="title">{product.title}</p>
              {product.prices.map(({ price }, index) => (
                <p
                  className="price"
                  key={index}
                >
                  { price === 0 ? 'GRÁTIS' : `R$ ${Math.round(price).toFixed(2)}` }
                </p>
              ))}
            </Link>
            <button
              type="button"
              className="cart-button"
              onClick={() => {
                addToCart(product, setIsAtCart, isAtCart);
              }}
            >
              ADICIONAR AO CARRINHO
            </button>
            {isAtCart && (
            <div className="at-cart">
              <AiOutlineShoppingCart className="at-cart-icon" />
            </div>
            )}
          </div>
        </Card>
      ) : (
        <div />
      )}
    </Container>
  );
}

export default CardProduct;
