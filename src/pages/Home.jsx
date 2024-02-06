import backgroundImg from "../assets/images/image-53.png";
const Home = () => {
  return (
    <>
      <div className="h-screen relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${backgroundImg})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-5 text-white md:px-0">
          <div className="text-center">
            <h1>
              You got the travel plans, we got the travel vans.
            </h1>
            <p>
              Add adventure to your life by joining the #client movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <button className="btn bg-orange-500 mt-16 w-full">Find your van</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
