import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanPhotos = () => {
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
      <img
        src={van.imageUrl}
        alt={`${van.name} image`}
        className="w-1/3 rounded-lg"
      />
    </div>
  );
};

export default HostVanPhotos;
