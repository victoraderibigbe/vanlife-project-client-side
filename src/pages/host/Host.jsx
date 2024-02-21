import axios from "axios";
import { useEffect, useState } from "react";
import ListVanCard from "../../components/ListVanCard";
import { Link } from "react-router-dom";
import { Spinner } from "flowbite-react";

const Host = () => {
  const [hostVans, setHostVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const url = import.meta.env.VITE_HOSTVANS_URL; // API endpoint

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
      <div className="relative min-h-80v md:px-60">
        {isLoading ? (
          <div className="w-full text-center h-80v pt-60">
            <Spinner size="xl" />
          </div>
        ) : (
          <div>
            <div className="p-5 bg-[#ffdae0] md:rounded-t-lg">
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
            <div className="flex items-center justify-between p-5 bg-[#ffddb2] md:rounded-b-lg">
              <div className="flex items-center justify-between">
                <span className="mr-3 font-bold">Review score</span>
                <span className="font-bold ">5.0</span>
                <span className="font-semibold opacity-60">/5</span>
              </div>
              <div className="text-end">
                <span>Details</span>
              </div>
            </div>
            <div className="p-5 md:p-0 md:py-5">
              <div className="flex items-center-justify-between">
                <div className="basis-3/4">
                  <h4>Your listed vans</h4>
                </div>
                <div className="text-sm md:text-lg basis-1/4 text-end">
                  <Link to="/host/vans">View all</Link>
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-5">
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
      </div>
    </>
  );
};

export default Host;
