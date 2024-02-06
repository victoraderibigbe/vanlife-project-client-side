const ListVanCard = ({ url, name, price, action }) => {
  return (
    <div className="flex items-center justify-between px-5 my-3 bg-white rounded-lg">
      <div className="p-3 basis-1/4">
        <img
          src={url}
          alt={`${name} Image`}
          className="rounded-lg"
        />
      </div>
      <div className="basis-2/4">
        <h4>{name}</h4>
        <h5 className="text-gray-500">{`${price}/day`}</h5>
      </div>
      <div className="basis-1/4 text-end">{action}</div>
    </div>
  );
};

export default ListVanCard;
