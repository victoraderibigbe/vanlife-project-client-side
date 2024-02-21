import VanCard from "../../components/VanCard";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

const AllVans = () => {
  const [vans, setVans] = useState([]); // State to handle all vans data
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
  const [filteredVans, setFilteredVans] = useState(undefined); // State to handle filtered vans
  
  const URL = import.meta.env.VITE_ALL_VANS_URL; // API enpoint

  useEffect(() => {
    // Get all vans from server
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setVans(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Function to filter type-simple vans
  const handleFilterSimple = () => {
    const simpleType = vans.filter((simpleVans) => simpleVans.type == "simple");
    setFilteredVans(simpleType);
  };

  // Function to filter type-luxury vans
  const handleFilterLuxury = () => {
    const luxuryType = vans.filter((luxuryVans) => luxuryVans.type == "luxury");
    setFilteredVans(luxuryType);
  };

  // Function to filter type-rugged vans
  const handleFilterRugged = () => {
    const ruggedType = vans.filter((ruggedVans) => ruggedVans.type == "rugged");
    setFilteredVans(ruggedType);
  };

  // Function to clear filters
  const handleClearFilters = () => {
    setFilteredVans(undefined);
  };

  return (
    <div className="relative min-h-screen p-3 md:px-60">
      <h2 className="md:text-center md:mb-10">Explore our van options</h2>

      <div className="flex items-center justify-between mb-5 md:mb-10 md:px-96">
        <button
          className="transition rounded-lg filter-btn hover:bg-orange-500 hover:text-white"
          onClick={() => handleFilterSimple()}
        >
          Simple
        </button>
        <button
          className="transition rounded-lg filter-btn hover:bg-black hover:text-white"
          onClick={() => handleFilterLuxury()}
        >
          Luxury
        </button>
        <button
          className="transition rounded-lg filter-btn hover:bg-green-500 hover:text-white"
          onClick={() => handleFilterRugged()}
        >
          Rugged
        </button>
        <button
          className="text-sm font-semibold underline text-stone-500"
          onClick={() => handleClearFilters()}
        >
          Clear Filters
        </button>
      </div>

      {isLoading ? (
        <div className="w-full text-center pt-60">
          <Spinner size="xl" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 md:gap-5 md:bg-white md:p-5">
          {filteredVans === undefined
            ? vans.map((data) => (
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
            : filteredVans.map((data) => (
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
              ))}
        </div>
      )}
    </div>
  );
};

export default AllVans;
