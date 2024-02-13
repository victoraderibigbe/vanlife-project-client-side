import { Link } from "react-router-dom";

const VanCard = ({ cardImg, altText, cardTitle, price, type, route }) => {
  const typeColor = () => {
    if (type.toLowerCase() === "simple") {
      return "bg-orange-500";
    } else if (type.toLowerCase() === "rugged") {
      return "bg-green-500";
    } else if (type.toLowerCase() === "luxury") {
      return "bg-black";
    }
  };

  return (
    <>

      <div>
        <Link to={route}>
          <div className="card-img">
            <img className="rounded" src={cardImg} alt={altText} />
          </div>

          <div className="p-2 my-2 card-body">
            <div className="flex">
              <div>
                <h4 className="mr-2 item-title">{cardTitle}</h4>
              </div>
              <div>
                <h4 className="item-price">${price}/day</h4>
              </div>
            </div>

            <div className="type">
              <div
                className={`p-2 w-2/4 text-center my-3 text-white rounded-lg font-semibold text-sm md:text-xl ${typeColor()}`}
              >
                {type}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VanCard;
