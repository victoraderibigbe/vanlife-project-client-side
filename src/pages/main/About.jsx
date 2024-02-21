import { Link } from "react-router-dom";
import heroImg from "/src/assets/images/image-54.png";

const About = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="relative inset-0 bg-center bg-cover h-50v"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        <div className="p-10 md:px-60">
          <div>
            <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of client enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="p-5 bg-orange-300 rounded-lg md:px-10">
            <h3>Your destination is waiting.</h3>
            <h3>Your van is ready.</h3>
            <Link to="/vans">
              <button className="my-3 transition bg-black btn hover:opacity-80">
                Explore Our Vans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
