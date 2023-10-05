import renderEpisodeDetails from "../Render/renderPersonDetails"

const fetchEpisodeDetails = async (id) => {

  const url = `https://rickandmortyapi.com/api/character/${id}`
  const response = await fetch (url)
  const data = await response.json()
  renderEpisodeDetails(data)
  
}

export default fetchEpisodeDetails