import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanPricing = () => {
  const [van, setVan] = useState([]);
  const { id } = useParams();
  console.log(id);
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
    <div className="my-5">
      <span className="mr-1 text-2xl font-semibold">${van.price}.00</span>
      <span className="text-xl font-medium text-gray-700">/day</span>
    </div>
  );
};

export default HostVanPricing;
