import React, { useEffect, useState } from 'react';
import { requestComics } from '../services';
import Context from './Context';
// import { getItemsFromLocalStorage } from '../utils/localStorageHelpers';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const comics = await requestComics();
      const { data: { results } } = comics;
      setData(results);
    };
    getApi();
  }, []);

  const context = {
    data,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}

export default Provider;
