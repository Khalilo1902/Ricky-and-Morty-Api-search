
export const renderEpisodeDetails = (episode) => {
  document.querySelector("#episodeContent").innerHTML = /*html */ `
  <div class=" flex flex-col items-center">
  <h1 class=" text-3xl text-purple-400 mb-4">name:${episode.name}</h1>
  <div class=" mt-4 flex flex-col items-center justify-center">
  <p>${episode.air_date}</p>
  <p> <span class=" text-purple-400">url:</span> ${episode.url}</p>
  <p> <span class=" text-purple-400">created :</span> ${episode.created}</p>
 
</div>
  </div>
`;
};

export default renderEpisodeDetails;
