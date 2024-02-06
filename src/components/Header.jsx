import { NavLink } from "react-router-dom";

const Header = ({ navlinks }) => {
  return (
    <>
      <nav className="z-50 flex flex-row items-center justify-between px-1 py-0 md:py-10 md:px-32">
        <div className="basis-2/4 md:basis-3/4">
          <NavLink to="/" className="text-2xl font-bold">
            #VANLIFE
          </NavLink>
        </div>
        <div className="basis-2/4 md:basis-1/4">
          <ul className="flex justify-between p-4 mt-4 font-medium md:p-0">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black underline font-bold text-xl"
                      : "text-xl text-gray-500"
                  }
                  to={link.path}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
