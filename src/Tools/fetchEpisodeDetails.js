import renderEpisodeDetails from "../Render/renderEpisodeDetails"

const fetchEpisodeDetails = async (id) => {

  const url = `https://rickandmortyapi.com/api/episode/${id}`
  const response = await fetch (url)
  const data = await response.json()
  renderEpisodeDetails(data)
  
}

export default fetchEpisodeDetails