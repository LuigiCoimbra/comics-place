import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { Container, Card } from './styles';

function CardItem() {
  const { data, addToCart } = useContext(Context);
  return (
    <Container>
      { data.map((comics, { scrollPosition }) => (
        comics.title !== 'Marvel Previews (2017)' ? (
          <Card>
            <div className="product-card">
              <Link
                key={comics.id}
                to={{ pathname: `/detalhes/${comics.id}` }}
                className="link-item"
              >
                <LazyLoadImage
                  effect="blur"
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  alt={comics.title}
                  scrollPosition={scrollPosition}
                  className="photo-item"
                />
                <p className="title">{comics.title}</p>
                {comics.prices.map(({ price }) => (
                  <p className="price">{ price === 0 ? 'GRÁTIS' : `R$ ${price}` }</p>
                ))}
              </Link>
              <button
                type="button"
                className="cart-button"
                onClick={() => {
                  addToCart(comics.id, comics.title, comics.prices, comics.thumbnail);
                }}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </Card>
        ) : (
          <div />
        )
      )) }
    </Container>
  );
}

export default CardItem;
