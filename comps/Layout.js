// import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      {/* <Head/> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
