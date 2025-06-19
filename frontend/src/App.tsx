import NavBar from "./components/Navbar";
import useRoutes from "./routes/routes";

const App = () =>{
    const routes = useRoutes();
    return(
        <>
        <NavBar/>
        {routes}
        </>
    )
}

export default App;