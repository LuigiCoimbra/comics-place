import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Context from '../../context/Context';
import { Container, Card } from './styles';

function CardItem() {
  const { data } = useContext(Context);

  return (
    <Container>
      { data.map((comics, { scrollPosition }) => (
        comics.title !== 'Marvel Previews (2017)' ? (

          <Card>
            <LazyLoadImage
              effect="blur"
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt={comics.title}
              scrollPosition={scrollPosition}
              width="386.656px"
              height="386.656px"
            />
            <p>{comics.title}</p>
          </Card>
        ) : (
          <div />
        )
      )) }
    </Container>
  );
}

export default CardItem;
