import { Link } from "react-router-dom";

const ListVanCard = ({ url, name, price, action, route }) => {
  return (
    <Link to={route}>
      <div className="flex items-center justify-between px-5 md:px-0 my-3 bg-[#ffffff] rounded-lg md:block">
        <div className="p-3 basis-1/4 md:p-0">
          <img src={url} alt={`${name} Image`} className="rounded-lg md:rounded-t-lg md:rounded-b-none" />
        </div>
        <div className="basis-2/4 md:p-5">
          <h5 className="font-semibold">{name}</h5>
          <h5 className="text-gray-500">{`${price}/day`}</h5>
        </div>
        <div className="text-sm basis-1/4 text-end md:text-start md:px-5 md:text-xl">
          {action}
        </div>
      </div>
    </Link>
  );
};

export default ListVanCard;
