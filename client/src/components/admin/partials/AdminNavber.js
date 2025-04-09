import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import logoNav from '../../assets/logoNav.jpg'

const AdminNavber = (props) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
    window.location.href = "/";
  };

  return (
    <Fragment>
      <nav className="sticky z-10 flex items-center shadow-md justify-around px-8 py-4 md:px-8 top-0 w-full bg-white">
        <div className="">
      <img src={logoNav} alt="Nav Logo" className='w-32  sm:w-32 md:w-48  lg:w-64 '/>
        </div>
        {/* Both Screen show */}
        <div className="flex items-center">
          
         
          {/* Logout Button Dropdown */}
          <div
            className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative"
            title="Logout"
          >
            <svg
              className="cursor-pointer w-8 h-8 text-black hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
              <li className="flex flex-col text-black">
                <span
                  onClick={(e) => history.push("/")}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                >
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </span>
                  <span>Shop</span>
                </span>
                  
                <span
                  onClick={(e) => logout()}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                >
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  <span>Logout</span>
                </span>
              </li>
            </div>
          </div>
        </div>
        {/* Mobile Navber */}
        {/* End Mobile Navber */}
      </nav>
    </Fragment>
  );
};

export default AdminNavber;
