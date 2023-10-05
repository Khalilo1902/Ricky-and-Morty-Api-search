import EpisodeCard from "../components/episodeCard";


export const renderEpisode = (episodesData)=> {
    console.log(episodesData)
    const episodes = episodesData && episodesData.length >0 ?episodesData.map((episode) => EpisodeCard(episode)).join('') :'<div class="text-center block w-full">No result</div>';
    document.querySelector('#episodeContainer').innerHTML = episodes
}