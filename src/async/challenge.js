const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/' // Si algo nunca se va a moder ni cambiar su nombre, por convención se escribe en mayusculas

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api)
    const character = await fetchData(`${API}${data.results[0].id}`)
    const origin = await fetchData(character.origin.url)
    
    console.table( [{Count: data.info.count, Name: character.name, Dimension: origin.dimension}] );
  } catch (error) {
    console.error(error)
  }
}
anotherFunction(API)