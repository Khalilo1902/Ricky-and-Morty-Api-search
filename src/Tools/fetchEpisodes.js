import { renderPagination } from "../Render/renderPage";
import { renderEpisode } from "../Render/renderEpisode";

 const fetchEpisodes = async(name="",page="")=>{
    const url =` https://rickandmortyapi.com/api/episode?name=${name}&page=${page}`;
    const response = await fetch (url)
  const data = await response.json()
    console.log(data)
    
    const {results,info}=data
    console.log(results)
    renderEpisode(results)
    renderPagination(info,name,page)
}

export default fetchEpisodes