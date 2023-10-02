import PersonCard from "../components/personneCards"

export const renderPersonDetails = (person) => {
  document.querySelector('#detailContent').innerHTML= /*html */ `
  <h1>${person.name}</h1>
`;
}




export default renderPersonDetails
