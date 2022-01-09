const timestamp = '1641219080';
const hash = '8bc6ba9cc376281ffb3b6fe90bca7c66';
const apikey = 'e424f294c04f0c9d9668f87a59fd5a9a';
const API_MARVEL = `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${apikey}&hash=${hash}`;
const API_MARVEL_ID = (id) => `http://gateway.marvel.com/v1/public/comics/${id}?ts=${timestamp}&apikey=${apikey}&hash=${hash}`;

export const requestComics = async () => {
  const requiriment = await fetch(API_MARVEL).then((response) => response.json());
  return requiriment;
};

export const requestComicId = async (id) => {
  const requiriment = await fetch(API_MARVEL_ID(id)).then((response) => response.json());
  return requiriment;
};
