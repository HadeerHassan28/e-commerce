import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
// import styles from "./Layout.module.css";

const Layout = ({ userData }) => {
  //console.log(userData);

  return (
    <>
      <NavBar userData={userData} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
