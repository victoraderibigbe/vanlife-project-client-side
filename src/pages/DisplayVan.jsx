import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DisplayVan = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  let URL = `https://vanlife-api-82gp.onrender.com/api/vans/${id}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log("Could not fetch API", err));
  }, []);

  const typeColor = () => {
    if (data.type === "simple") {
      return "bg-orange-500";
    } else if (data.type === "rugged") {
      return "bg-green-500";
    } else if (data.type === "luxury") {
      return "bg-black";
    }
  };

  return (
    <>
      <div className="w-full p-5 mx-auto md:p-10 md:w-2/4">
        <div>
          <Link to="/vans" className="text-xl font-medium underline">
            Back to all vans
          </Link>
        </div>
        <div></div>
        <div className="my-5">
          <img className="w-full" src={data.imageUrl} alt={data.name} />
        </div>
        <div>
          <div
            className={`w-2/6 md:w-3/12 py-3 text-center text-white rounded-lg font-semibold text-xl ${typeColor()}`}
          >
            {data.type}
          </div>
        </div>
        <div className="my-5">
          <h2>{data.name}</h2>
        </div>
        <div className="text-xl">
          <span className="font-bold">${data.price}</span>
          <span>/day</span>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          <button className="w-full py-3 text-xl font-semibold text-white transition rounded-lg bg-amber-500 hover:bg-amber-600">
            <Link to="/register">Rent this van</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayVan;
