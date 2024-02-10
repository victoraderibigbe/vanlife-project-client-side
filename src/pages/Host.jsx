import axios from "axios";
import { useEffect, useState } from "react";
import ListVanCard from "../components/ListVanCard";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

const Host = () => {
  const [hostVans, setHostVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://vanlife-api-82gp.onrender.com/api/host/vans";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setHostVans(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full text-center h-80v pt-60">
          <Spinner size="xl" />
        </div>
      ) : (
        <div>
          <div className="p-5 bg-orange-100">
            <div>
              <h3>Welcome</h3>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="basis-3/4">
                <span>Income last</span>
                <span className="ml-1 font-medium underline">30 days</span>
              </div>
              <div className="basis-1/4 text-end">
                <span>Details</span>
              </div>
            </div>
            <div>
              <h2>$2,260</h2>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 bg-orange-200">
            <div className="flex items-center justify-between">
              <span className="mr-3 font-bold">Review score</span>
              <span className="font-bold ">5.0</span>
              <span className="font-semibold opacity-60">/5</span>
            </div>
            <div className="text-end">
              <span>Details</span>
            </div>
          </div>
          <div className="p-5 bg-orange-50">
            <div className="flex items-center-justify-between">
              <div className="basis-3/4">
                <h4>Your listed vans</h4>
              </div>
              <div className="text-sm basis-1/4 text-end">
                <Link to="/host/vans">View all</Link>
              </div>
            </div>
            <div>
              {hostVans.map((van) => (
                <div key={van.id}>
                  <ListVanCard
                    url={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    action={"Edit"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Host;
