import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisplayHostVan = () => {
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
    <>
      <div className="my-5">
        <div className="my-2">
          <span className="mr-2 font-bold">Name:</span>
          <span className="font-medium">{van.name}</span>
        </div>
        <div className="my-2">
          <span className="mr-2 font-bold">Category:</span>
          <span className="font-medium" style={{ textTransform: "capitalize" }}>
            {van.type}
          </span>
        </div>
        <div className="my-2">
          <span className="mr-2 font-bold">Description:</span>
          <span className="font-medium">{van.description}</span>
        </div>
        <div className="my-2">
          <span className="mr-2 font-bold">Visibility:</span>
          <span className="font-medium">Public</span>
        </div>
      </div>
    </>
  );
};

export default DisplayHostVan;
