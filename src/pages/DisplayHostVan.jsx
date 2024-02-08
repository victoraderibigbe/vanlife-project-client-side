import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubHeader from "../components/SubHeader";

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

  const typeColor = () => {
    if (van.type === "simple") {
      return "bg-orange-500";
    } else if (van.type === "rugged") {
      return "bg-green-500";
    } else if (van.type === "luxury") {
      return "bg-black";
    }
  };

  return (
    <>
      <div className="w-full p-5 mx-auto md:p-10 md:w-2/4">
        <div>
          <Link to="/vans" className="text-sm font-medium underline md:text-xl">
            Back to all vans
          </Link>
        </div>
        <div className="p-5 bg-white">
          <div className="flex items-center">
            <div className="basis-1/3">
              <img
                className="rounded"
                src={van.imageUrl}
                alt={`${van.name} image`}
              />
            </div>
            <div className="pl-5 basis-2/3">
              <div
                className={`h-8 w-24 font-semibold text-white rounded text-center flex items-center justify-center my-4 ${typeColor()}`}
                style={{ textTransform: "capitalize" }}
              >
                {van.type}
              </div>
              <div>
                <h2>{van.name}</h2>
              </div>
              <div>
                <span className="text-lg font-bold">$60</span>
                <span className="text-lg font-semibold">/day</span>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="my-2">
              <span className="mr-2 font-bold">Name:</span>
              <span className="font-medium">{van.name}</span>
            </div>
            <div className="my-2">
              <span className="mr-2 font-bold">Category:</span>
              <span
                className="font-medium"
                style={{ textTransform: "capitalize" }}
              >
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
        </div>
      </div>
    </>
  );
};

export default DisplayHostVan;
