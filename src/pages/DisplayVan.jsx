import axios from "axios";
import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DisplayVan = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const URL = `https://vanlife-api-82gp.onrender.com/api/vans/${id}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
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
          <Link to="/vans" className="text-sm font-medium underline md:text-xl">
            Back to all vans
          </Link>
        </div>

        {isLoading ? (
          <div className="w-full text-center h-80v pt-60">
            <Spinner size="xl" />
          </div>
        ) : (
          <div>
            <div className="my-5">
              <img
                className="w-full rounded"
                src={data.imageUrl}
                alt={data.name}
              />
            </div>
            <div>
              <div
                className={`w-2/6 md:w-3/12 py-3 text-center text-white rounded-lg font-semibold text-sm md:text-xl ${typeColor()}`}
              >
                {data.type}
              </div>
            </div>
            <div className="my-2 md:my-5">
              <h3>{data.name}</h3>
            </div>
            <div className="text-lg">
              <span className="font-bold">${data.price}</span>
              <span>/day</span>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
            <div>
              <button className="w-full py-3 text-lg font-semibold text-white transition rounded-lg md:text-xl bg-amber-500 hover:bg-amber-600">
                <Link to="/register">Rent this van</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayVan;
