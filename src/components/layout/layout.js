import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

 

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main  >{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
