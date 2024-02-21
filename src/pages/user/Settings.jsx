import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="relative mx-auto min-h-80v md:w-2/5 md:text-center">
      <div className="p-10">
        <h2>This page is under construction.</h2>
        <button className="w-full h-12 mt-16 text-white bg-black rounded-lg hover:opacity-80">
          <Link to="/host">Return to Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default Settings;
