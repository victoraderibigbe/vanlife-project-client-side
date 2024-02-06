import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";

const HostLayout = () => {
  return (
    <>
      <Header
        navlinks={[
          { title: "Host", path: "/host" },
          { title: "About", path: "/about" },
          { title: "Vans", path: "/vans" },
        ]}
      />
      <SubHeader
        navlinks={[
          { title: "Dashboard", path: "/host/." },
          { title: "Income", path: "/host/income" },
          { title: "Vans", path: "/host/vans" },
          { title: "Reviews", path: "/host/reviews" },
        ]}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default HostLayout;
