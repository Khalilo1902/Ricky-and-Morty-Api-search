import fetchEpisodeDetails from "../Tools/fetchEpisodeDetails";

 const episode = (id) => {

    fetchEpisodeDetails(id)



    return /*html */`
    <div class=" container py-10" id="episodeContent"></div>
`;
}

export default episode
