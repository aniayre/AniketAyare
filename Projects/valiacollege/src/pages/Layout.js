import { Outlet, Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
    {/* <Header /> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
      
      {/* <Footer /> */}
    </>
  );
};

export default Layout;