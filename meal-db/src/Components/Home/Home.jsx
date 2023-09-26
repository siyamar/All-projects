import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";
import './Home.css'
import { Outlet } from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;