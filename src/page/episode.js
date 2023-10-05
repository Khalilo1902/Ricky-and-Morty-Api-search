import fetchEpisodes from "../Tools/fetchEpisodes"


 const episode = (id) => {

    fetchEpisodes(id)

    console.log(fetchEpisodes(id))

    return /*html */`
    <div class=" container py-10" id="episodeContent"></div>
`;
}

export default episode
