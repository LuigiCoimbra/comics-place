import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import { Container, Card } from './styles';

function CardItem() {
  const { data } = useContext(Context);

  return (
    <Container>
      { data.map((comics, { scrollPosition }) => (
        comics.title !== 'Marvel Previews (2017)' ? (
          <Card>
            <Link
              to={{ pathname: `/detalhes/${comics.id}`, state: data }}
              className="link-item"
            >
              <LazyLoadImage
                effect="blur"
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                alt={comics.title}
                scrollPosition={scrollPosition}
                className="photo-item"
              />
              <p>{comics.title}</p>
            </Link>
          </Card>
        ) : (
          <div />
        )
      )) }
    </Container>
  );
}

export default CardItem;
