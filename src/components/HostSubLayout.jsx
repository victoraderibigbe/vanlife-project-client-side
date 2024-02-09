import { Link, Outlet, useParams } from "react-router-dom";
import SubHeader from "./SubHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayHostVanTitle from "./DisplayHostVanTitle";

const HostSubLayout = () => {
  const [van, setVan] = useState([]);
  const { id } = useParams();
  const url = `https://vanlife-api-82gp.onrender.com/api/host/vans/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setVan(res.data);
      })
      .catch((err) => console.log("Could not fetch", err));
  }, []);

  return (
    <>
      <div className="w-full px-2 mx-auto md:p-10 md:w-2/4">
        <div className="p-5 bg-white">
          <div>
            <Link
              to="/vans"
              className="text-sm font-medium underline md:text-xl"
            >
              Back to all vans
            </Link>
          </div>
          <DisplayHostVanTitle
            vanName={van.name}
            imageUrl={van.imageUrl}
            type={van.type}
            price={van.price}
          />
          <SubHeader
            navlinks={[
              { title: "Details", path: `/host/vans/${id}` },
              { title: "Pricing", path: `/host/vans/${id}/pricing` },
              { title: "Photos", path: `/host/vans/${id}/photos` },
            ]}
          />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HostSubLayout;
