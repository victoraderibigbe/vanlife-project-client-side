import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const VanCard = ({
  cardImg,
  altText,
  cardTitle,
  price,
  btnTitle,
  route,
}) => {
  const typeColor = () => {
    if (btnTitle.toLowerCase() === "simple") {
      return "bg-orange-500";
    }
    else if (btnTitle.toLowerCase() === "rugged") {
      return "bg-green-500";
    }
    else if (btnTitle.toLowerCase() === "luxury") {
      return "bg-black";
    }
  };

  return (
    <>
      <div>
        <Card className="max-w-sm" imgAlt={altText} imgSrc={cardImg}>
          <div className="flex">
            <div>
              <h4 className="mr-2 card-title">{cardTitle}</h4>
            </div>
            <div>
              <h4 className="item-price">${price}/day</h4>
            </div>
          </div>

          <button
            className={`py-3 text-white rounded-lg font-semibold text-xl ${typeColor()}`}
          >
            <Link to={route}>{btnTitle}</Link>
          </button>
        </Card>
      </div>
    </>
  );
};

export default VanCard;
