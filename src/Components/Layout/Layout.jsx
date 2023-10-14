import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
// import styles from "./Layout.module.css";

const Layout = () => {
  //console.log(userData);

  return (
    <>
      <div className="pt-5">
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
