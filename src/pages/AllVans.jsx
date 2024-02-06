import VanCard from "../components/VanCard";
import axios from "axios";
import { useEffect, useState } from "react";

const AllVans = () => {
  const [vans, setVans] = useState([]);
  let URL = "http://localhost:3200/api/vans";
  
  useEffect(() => {
    axios.get(URL)
    .then((res) => {
      console.log(res.data);
      setVans(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="p-5">
      <h1>Explore our van options</h1>

      <div className="flex items-center justify-between mb-10">
        <button className="filter-btn">Simple</button>
        <button className="filter-btn">Luxury</button>
        <button className="filter-btn">Rugged</button>
        <button className="text-xl font-semibold underline text-stone-500">
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {
          vans.map((data) => (
          <div key={data.id} className="col-span-2 md:col-span-1">
            <VanCard
              cardImg={data.imageUrl}
              altText={data.name}
              cardTitle={data.name}
              price={data.price}
              btnTitle={data.type}
              btnColor={"orange-500"}
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
