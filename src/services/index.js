export const getCharacters = (page = 1) =>{
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  .then(res => res.json())
  .then(data => {
    return data.results;
  })
  .catch( error => error);
}