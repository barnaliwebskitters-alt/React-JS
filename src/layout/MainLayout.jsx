
import Header from "../components/Header/Header";
import Activity from "../components/Activity/Activity";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Header />
        {children}
      </div>

      <Activity />
    </div>
  );
};

export default MainLayout;