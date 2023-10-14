import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
// import styles from "./Layout.module.css";

const Layout = ({ userData }) => {
  //console.log(userData);

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <NavBar userData={userData} />
          <div className="container py-5">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
