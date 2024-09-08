import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Layout;