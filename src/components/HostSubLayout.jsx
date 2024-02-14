import { Link, Outlet, useParams } from "react-router-dom";
import SubHeader from "./SubHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayHostVanTitle from "./DisplayHostVanTitle";
import { Spinner } from "flowbite-react";

const HostSubLayout = () => {
  const [van, setVan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const url = `${import.meta.env.VITE_DISPLAY_HOST_VAN_URL}/${id}`;

  useEffect(() => {
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setVan(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("Could not fetch", err));
  }, []);

  return (
    <>
      <div className="relative w-full px-2 mx-auto min-h-80v md:p-5 md:w-2/4">
        <div className="p-5 bg-white md:rounded-lg">
          <div>
            <Link
              to="/host/vans"
              className="text-sm font-medium underline md:text-xl"
            >
              Back to all vans
            </Link>
          </div>

          {isLoading ? (
            <div className="w-full text-center h-30v pt-60">
              <Spinner size="xl" />
            </div>
          ) : (
            <div>
              <div>
                <DisplayHostVanTitle
                  vanName={van.name}
                  imageUrl={van.imageUrl}
                  type={van.type}
                  price={van.price}
                />
              </div>
              <SubHeader
                navlinks={[
                  {
                    title: "Details",
                    path: `/host/vans/${id}`,
                  },
                  { title: "Pricing", path: `/host/vans/${id}/pricing` },
                  { title: "Photos", path: `/host/vans/${id}/photos` },
                ]}
              />
              <Outlet />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HostSubLayout;
