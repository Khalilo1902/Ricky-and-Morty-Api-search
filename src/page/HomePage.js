import Header from "../components/Header";
import inputSearch from "../components/inputSearch";
import Pagination from "../components/pagination";
import PersonList from "../components/personneListe";
import {fetchPersons} from "../Tools/fetchPersonne"

const App = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get('name') ?? '';
    const page = searchParams.get('page')?? '';
    fetchPersons(name, page);
    return /*html */`
        <div class=" container py-10">
        ${Header()}
        ${inputSearch(name)}
        ${PersonList()}
        ${Pagination()}
        </div>
    `;
}

export default App;