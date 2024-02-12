import { Dropdown } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SubHeader = ({ navlinks, onLogout }) => {
  return (
    <nav className="z-50 px-1 py-0 mb-4 cursor-pointer md:py-10 md:px-80">
      <div className="mx-auto">
        <ul className="flex justify-between px-5 mt-4 font-medium md:p-0">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              {Array.isArray(navlink) ? (
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="text-sm text-gray-500 md:text-xl">
                      Account
                    </span>
                  )}
                >
                  {navlink[1].map((item, idx) => (
                    <Dropdown.Item key={idx}>
                      <NavLink to={item.path} end>
                        {item.title}
                      </NavLink>
                    </Dropdown.Item>
                  ))}
                  {/* Logout Option */}
                  <Dropdown.Item>
                    <button onClick={onLogout}>Logout</button>
                  </Dropdown.Item>
                </Dropdown>
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SubHeader;
