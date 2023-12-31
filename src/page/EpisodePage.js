import fetchEpisodes from "../Tools/fetchEpisodes";
import Header from "../components/Header";
import EpisodeList from "../components/episodeListe";
import inputSearch from "../components/inputSearch";
import Pagination from "../components/pagination";


const EpisodePage = ()=>{
    const path = window.location.pathname.slice(1);
    console.log("path",path);
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get("name") ?? "";
    const page = searchParams.get("page") ?? "";
    fetchEpisodes(name, page);

    return /*html */ `
    <div class=" container py-10">
    ${Header()}
    ${inputSearch(name)}
    ${EpisodeList()}
    ${Pagination()}
    </div>
`;
}

export default EpisodePage