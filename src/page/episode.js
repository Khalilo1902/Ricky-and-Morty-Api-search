import fetchEpisodes from "../Tools/fetchEpisode"


 const episode = (id) => {

    fetchEpisodes(id)

    console.log(fetchEpisodes(id))

    return /*html */`
    <div class=" container py-10" id="episodeContent"></div>
`;
}

export default episode
