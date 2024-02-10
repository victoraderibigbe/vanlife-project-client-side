const DisplayHostVanBody = ({ vanName, type, description }) => {
  return (
    <div className="my-5">
      <div className="my-2">
        <span className="mr-2 font-bold">Name:</span>
        <span className="font-medium">{vanName}</span>
      </div>
      <div className="my-2">
        <span className="mr-2 font-bold">Category:</span>
        <span className="font-medium" style={{ textTransform: "capitalize" }}>
          {type}
        </span>
      </div>
      <div className="my-2">
        <span className="mr-2 font-bold">Description:</span>
        <span className="font-medium">{description}</span>
      </div>
      <div className="my-2">
        <span className="mr-2 font-bold">Visibility:</span>
        <span className="font-medium">Public</span>
      </div>
    </div>
  );
};

export default DisplayHostVanBody;
