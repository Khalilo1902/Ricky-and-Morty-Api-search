import HomePage from "../src/page/HomePage"
import Details from "../src/page/details"

const Router = () => {
 const path = window.location.pathname.slice(1)
 console.log(path)
 const route = path.split ("/")
 console.log(route)
 if (route[0]==="person"){
    if(route.length > 1 ) {
        return Details(route[1])
    }
 }
 return HomePage();
}

export default Router
