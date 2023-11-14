import Sidebar from "./sidebar.js/sidebar";

 



const UserDashboardLayout = ({ children }) => {
    return ( 
      <div className="flex  ">
        <aside  className="  ">
        <Sidebar/>
        </aside>
        <main style={{ flexGrow: 1, padding: '20px' }}>
          {children}
        </main>
      </div>
    );
  };
  
  export default UserDashboardLayout;
  