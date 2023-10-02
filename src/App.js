
import Router from "../router/index";


const App = () => {
    return /*html */`
        <div>
            <div class="container py-2 flex">
                <a href="/">Home</a>
            </div>
            
            ${Router()}
        </div>
    `;
}

export default App;
