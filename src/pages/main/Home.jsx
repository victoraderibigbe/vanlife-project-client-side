import { Link } from "react-router-dom";
import backgroundImg from "/src/assets/images/image-53.png";

const Home = () => {
  return (
    <>
      <div className="relative h-screen min-h-screen">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-5 text-white md:px-0">
          <div className="text-center">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>
              Add adventure to your life by joining the #client movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <Link to="/vans">
              <button className="w-full mt-16 bg-orange-500 btn">
                Find your van
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
