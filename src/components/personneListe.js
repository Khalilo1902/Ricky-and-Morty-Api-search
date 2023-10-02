import { fetchPersons } from "../Tools/fetchPersonne";
import "../style.css"

const PersonList = () => {
    
    fetchPersons();

    return /*html */`
    <div class=" flex gap-2 flex-wrap py-8 justify-center items-center" id="personsContainer"></div>`;

}
export default PersonList;