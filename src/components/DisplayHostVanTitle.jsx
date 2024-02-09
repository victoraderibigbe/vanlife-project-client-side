const DisplayHostVanTitle = ({ vanName, imageUrl, type, price }) => {
  const typeColor = () => {
    if (type === "simple") {
      return "bg-orange-500";
    } else if (type === "rugged") {
      return "bg-green-500";
    } else if (type === "luxury") {
      return "bg-black";
    }
  };

  return (
    <div className="flex items-center">
      <div className="basis-1/3">
        <img className="rounded" src={imageUrl} alt={`${vanName} image`} />
      </div>
      <div className="pl-5 basis-2/3">
        <div
          className={`h-8 w-24 font-semibold text-white rounded text-center flex items-center justify-center my-4 ${typeColor()}`}
          style={{ textTransform: "capitalize" }}
        >
          {type}
        </div>
        <div>
          <h2>{vanName}</h2>
        </div>
        <div>
          <span className="text-lg font-bold">${price}</span>
          <span className="text-lg font-semibold">/day</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayHostVanTitle;
