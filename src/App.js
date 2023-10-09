import Router from "../router/index";
import Menu from "./components/Menu";

const App = () => {
  return /*html */ `
        <div>
        ${Menu()}
         ${Router()}
        </div>
    `;
};

export default App;
