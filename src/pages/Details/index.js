import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import { requestComicId } from '../../services';
import GlobalStyle from '../../styles/GlobalStyle';
import HomeIcon from '../../components/HomeIcon';
import CartIcon from '../../components/CartIcon';
import CardDetails from '../../components/CardDetails';

function Details() {
  const [comicId, setComicId] = useState([]);
  const { idComic } = useParams();

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
      <Navigation />
      <HomeIcon />
      <CartIcon />
      { comicId.map((comic) => (
        <CardDetails comic={comic} />
      )) }
    </div>
  );
}

export default Details;
