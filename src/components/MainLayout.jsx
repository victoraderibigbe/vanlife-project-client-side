import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="bg-body">
      <Header
        navlinks={[
          { title: "About", path: "/about" },
          { title: "Vans", path: "/vans" },
        ]}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
