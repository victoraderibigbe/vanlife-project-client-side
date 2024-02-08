import { Outlet, useParams } from "react-router-dom";
import SubHeader from "./SubHeader";

const HostSubLayout = () => {
  const { id } = useParams();

  return (
    <>
      <SubHeader
        navlinks={[
          { title: "Details", path: `/host/vans/${id}` },
          { title: "Pricing", path: `/host/vans/${id}/pricing` },
          { title: "Photos", path: `/host/vans/${id}/photos` },
        ]}
      />
      <Outlet />
    </>
  );
};

export default HostSubLayout;
