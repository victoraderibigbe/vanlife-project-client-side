import axios from "axios";
import { useEffect, useState } from "react";
import ListVanCard from "../components/ListVanCard";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);
  let url = "https://vanlife-api-82gp.onrender.com/api/host/vans";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setHostVans(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="p-5 pb-40 bg-orange-50">
        <div className="p-5">
          <h3>Your listed vans</h3>
        </div>
        {hostVans.map((van) => (
          <div key={van.id}>
            <ListVanCard
              url={van.imageUrl}
              name={van.name}
              price={van.price}
              route={`/host/vans/${van.id}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HostVans;
