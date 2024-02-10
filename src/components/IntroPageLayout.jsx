import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Header from "./Header";

const IntroPageLayout = () => {
  return (
    <>
      <div className="bg-body">
        <Header
          navlinks={[
            { title: "Host", path: "/host" },
            { title: "About", path: "/about" },
            { title: "Vans", path: "/vans" },
            { title: <AccountCircleOutlinedIcon />, path: "/user" },
          ]}
        />
        <Outlet />
        <Footer position={"abs"} />
      </div>
    </>
  );
};

export default IntroPageLayout;
