import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { useEffect } from "react";

const HostLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Redirect user to login page if not signed in
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn === 'false') {
      navigate("/login")
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="bg-body">
        <Header
          navlinks={[
            { title: "Host", path: "/host" },
            { title: "About", path: "/about" },
            { title: "Vans", path: "/vans" },
          ]}
        />
        <SubHeader
          navlinks={[
            { title: "Dashboard", path: "/host/" },
            { title: "Income", path: "/host/income" },
            { title: "Vans", path: "/host/vans" },
            { title: "Reviews", path: "/host/reviews" },
            [
              "Account",
              [
                { title: "Profile", path: "/host/user/profile" },
                { title: "Settings", path: "/host/user/settings" },
              ],
            ],
          ]}
          onLogout={handleLogout}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default HostLayout;
