import renderPersonDetail from "../Render/renderPersonDetails"

const fetchPersonDetails = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`
  const response = await fetch (url)
  const data = await response.json()
  renderPersonDetail(data)
  
}

export default fetchPersonDetails
