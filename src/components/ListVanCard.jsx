import { Link } from "react-router-dom";

const ListVanCard = ({ url, name, price, action, route }) => {
  return (
    <Link to={route}>
      <div className="flex items-center justify-between px-5 my-3 bg-[#ffffff] rounded-lg">
        <div className="p-3 basis-1/4">
          <img src={url} alt={`${name} Image`} className="rounded-lg" />
        </div>
        <div className="basis-2/4">
          <h5 className="font-semibold">{name}</h5>
          <h5 className="text-gray-500">{`${price}/day`}</h5>
        </div>
        <div className="text-sm basis-1/4 text-end">{action}</div>
      </div>
    </Link>
  );
};

export default ListVanCard;
