import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanPricing = () => {
  const [van, setVan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  const url = `${import.meta.env.VITE_DISPLAY_HOST_VAN_URL}/${id}`;

  useEffect(() => {
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
      {isLoading ? (
        <div className="w-full text-center h-50v pt-60">
          <Spinner size="xl" />
        </div>
      ) : (
        <div className="my-5">
          <span className="mr-1 text-2xl font-semibold">${van.price}.00</span>
          <span className="text-xl font-medium text-gray-700">/day</span>
        </div>
      )}
    </>
  );
};

export default HostVanPricing;
