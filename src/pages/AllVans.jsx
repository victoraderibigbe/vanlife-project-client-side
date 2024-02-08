import VanCard from "../components/VanCard";
import axios from "axios";
import { useEffect, useState } from "react";

const AllVans = () => {
  const [vans, setVans] = useState([]);
  let URL = "https://vanlife-api-82gp.onrender.com/api/vans"
  
  useEffect(() => {
    axios.get(URL)
    .then((res) => {
      console.log(res.data);
      setVans(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="p-3 md:p-5">
      <h2>Explore our van options</h2>

      <div className="flex items-center justify-between mb-5 md:mb-10">
        <button className="filter-btn">Simple</button>
        <button className="filter-btn">Luxury</button>
        <button className="filter-btn">Rugged</button>
        <button className="text-sm font-semibold underline text-stone-500">
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-5">
        {
          vans.map((data) => (
          <div key={data.id} className="col-span-2 md:col-span-1">
            <VanCard
              cardImg={data.imageUrl}
              altText={data.name}
              cardTitle={data.name}
              price={data.price}
              type={data.type}
              route={`/vans/${data.id}`}
            />
          </div>
            
          ))
        }
      </div>
    </div>
  );
};

export default AllVans;
