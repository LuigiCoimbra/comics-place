import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';
import {
  getItemsFromLocalStorage, saveItemToLocalStorage,
} from '../../utils/localStorageHelpers';
import Context from '../../context/Context';

function CardItem({ product }) {
  const { updateItemCount } = useContext(Context);
  const [isAtCart, setIsAtCart] = useState();

  const checkCart = () => {
    const items = getItemsFromLocalStorage('cartItems');

    setIsAtCart(items.some((item) => item.id === product.id));
  };

  useEffect(() => {
    checkCart();
  }, []);

  const handleClick = () => {
    const items = getItemsFromLocalStorage('cartItems');

    if (!isAtCart) {
      const newItems = [...items, { ...product, amount: 1 }];

      setIsAtCart(true);
      saveItemToLocalStorage('cartItems', newItems);
      updateItemCount();
    } else {
      const newItems = items.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      saveItemToLocalStorage('cartItems', newItems);
      updateItemCount();
    }
  };

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
                  { price === 0 ? 'GRÁTIS' : `R$ ${price}` }
                </p>
              ))}
            </Link>
            <button
              type="button"
              className="cart-button"
              onClick={() => {
                handleClick();
              }}
            >
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </Card>
      ) : (
        <div />
      )}
    </Container>
  );
}

export default CardItem;
