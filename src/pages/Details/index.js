import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { requestComicId } from '../../services';
import GlobalStyle from '../../styles/GlobalStyle';
import { Container } from './styles';
import Footer from '../../components/Footer';
import Context from '../../context/Context';

function Details() {
  const [comicId, setComicId] = useState([]);
  const { idComic } = useParams();
  const { addToCart } = useContext(Context);

  useEffect(() => {
    const requestApi = async () => {
      const item = await requestComicId(idComic);
      const { data } = item;
      setComicId(data.results);
    };
    requestApi();
  }, [idComic]);

  return (
    <div>
      <GlobalStyle />
      <Navigation
        home={false}
      />
      { comicId.map((comic) => (
        <Container>
          <section className="title-image">
            <h1>{comic.title}</h1>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </section>
          <section className="price-title">
            {comic.prices.map(({ price }) => (
              <h1 className="price">{`R$ ${price}`}</h1>
            ))}
            <div>
              {comic.textObjects.map((value) => (
                <p>{value.text}</p>
              ))}
            </div>
            <div className="container-div">
              <button
                type="button"
                className="add-cart"
                onClick={() => addToCart(comic.id, comic.title, comic.prices, comic.thumbnail)}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </section>
        </Container>
      )) }
      <Footer />
    </div>
  );
}

export default Details;
