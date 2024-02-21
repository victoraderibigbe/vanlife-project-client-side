import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// Page Layout
import MainLayout from "./components/MainLayout";
import HostLayout from "./components/HostLayout";
import IntroPageLayout from "./components/IntroPageLayout";
import HostSubLayout from "./components/HostSubLayout";

// Main pages
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Error404 from "./pages/Error404";

// Van pages
import AllVans from "./pages/van/AllVans";
import DisplayVan from "./pages/van/DisplayVan";

// Auth pages
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

// HostVans pages
import Host from "./pages/host/Host";
import HostVans from "./pages/host/HostVans";
import HostReviews from "./pages/host/HostReviews";
import HostIncome from "./pages/host/HostIncome";
import DisplayHostVan from "./pages/host/DisplayHostVan";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";

// User Account pages
import Profile from "./pages/user/Profile";
import Settings from "./pages/user/Settings";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        {/* Main pages routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<AllVans />} />
          <Route path="/vans/:id" element={<DisplayVan />} />
        </Route>

        {/* Auth pages routes */}
        <Route element={<IntroPageLayout />}>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Route>

        {/* HostVans pages routes */}
        <Route element={<HostLayout />}>
          <Route path="/host" element={<Host />} />
          <Route path="/host/dashboard" element={<Navigate to="/host" />} />
          <Route path="/host/vans" element={<HostVans />}/>
          <Route path="/host/reviews" element={<HostReviews />} />
          <Route path="/host/income" element={<HostIncome />} />
          <Route path="/host/user/profile" element={<Profile />} />
          <Route path="/host/user/settings" element={<Settings />} />
          
          {/* HostVans sub-pages routes */}
          <Route element={<HostSubLayout />}>
            <Route path="/host/vans/:id" element={<DisplayHostVan />} />
            <Route path="/host/vans/:id/pricing" element={<HostVanPricing />} />
            <Route path="/host/vans/:id/photos" element={<HostVanPhotos />} />
          </Route>
        </Route>

        {/* Error page route */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default App;
