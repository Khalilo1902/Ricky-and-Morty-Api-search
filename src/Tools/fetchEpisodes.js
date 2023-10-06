import { renderPagination } from "../Render/renderPage";
import { renderEpisode } from "../Render/renderEpisode";

 const fetchEpisodes = async(name="",page="")=>{
    const url =` https://rickandmortyapi.com/api/episode?name=${name}&${page}`;
    const data = await fetch(url)
    console.log(data)
    renderEpisode(results)
    const [results,info]=data
    console.log(results)
    renderPagination(info,name,page)
}

export default fetchEpisodes