import fetchPersonDetails from "../Tools/fetchPersonDetails"


const details = (id) => {

    fetchPersonDetails(id)

    return /*html */`
    <div class=" container py-10" id="detailContent"></div>
`;
}

export default details
