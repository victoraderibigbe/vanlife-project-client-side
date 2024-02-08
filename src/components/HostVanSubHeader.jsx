import React from "react";

const HostVanSubHeader = ({ navlinks }) => {
  return (
    <nav className="z-50 flex flex-row items-center justify-between px-1 py-0 md:py-10 md:px-32">
      <div className="basis-3/4">
        <ul className="flex justify-between p-4 mt-4 font-medium md:p-0">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-black underline font-bold text-sm md:text-xl"
                    : "text-sm md:text-xl text-gray-500"
                }
                to={navlink.path}
                end
              >
                {navlink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HostVanSubHeader;
