import PersonCard from "../components/personneCards";

export const renderPersonDetails = (person) => {
  document.querySelector("#detailContent").innerHTML = /*html */ `
  <div class=" flex flex-col items-center">
  <h1 class=" text-3xl text-purple-400 mb-4">${person.name}</h1>
  <img src=${person.image} alt="" class=" rounded-lg sm:w-[300px] md:w-1/2">
  <div class=" mt-4 flex flex-col items-center justify-center">
  <p>${person.origin.name}</p>
  <a class=" text-xl text-red-500" href= ${person.origin.url}> <span class=" text-purple-400">Url :</span> ${person.origin.url}</a>
  <p> <span class=" text-purple-400">species:</span> ${person.species}</p>
  <p> <span class=" text-purple-400">status :</span> ${person.status}</p>
 
</div>
  </div>
`;
};

export default renderPersonDetails;
