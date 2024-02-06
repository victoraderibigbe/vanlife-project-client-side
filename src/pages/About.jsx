import heroImg from "../assets/images/image-54.png";

const About = () => {
  return (
    <>
      <div
        className="relative inset-0 bg-center bg-cover h-half"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
      <div className="p-10">
        <div>
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            </p>
            <p>Our team is full of client enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="p-5 bg-orange-300 rounded-lg">
            <h2>Your destination is waiting.</h2>
            <h2>Your van is ready.</h2>
            <button className="my-5 bg-black btn">Explore Our Vans</button>
        </div>
      </div>
    </>
  );
};

export default About;
