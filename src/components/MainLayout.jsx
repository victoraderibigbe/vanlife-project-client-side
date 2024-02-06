import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Header
        navlinks={[
          { title: "About", path: "/about" },
          { title: "Vans", path: "/vans" },
        ]}
      />
      <Outlet />
      <Footer absolute={false} />
    </div>
  );
};

export default MainLayout;
