import Navbar from "../navbar/navbar";

 

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main  >{children}</main>
      {/* You can add a footer or other common elements here */}
    </div>
  );
};

export default Layout;
