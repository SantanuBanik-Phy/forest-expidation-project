import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // Keep local state for tooltip display name
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  // Update the local state when the user object changes
  useEffect(() => {
    setDisplayName(user?.displayName || "");
  }, [user]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="md:navbar flex md:flex-row justify-center items-center flex-col text-white ">
      <div className="md:navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Eco-Adventure
        </Link>
      </div>
      <div className="md:navbar-center lg:flex">
        <ul className="menu menu-horizontal px-2 space-x-8 text-lg">
          
            <NavLink to="/" >Home</NavLink>
          
          
            
              <NavLink to="/updateProfile">Update Profile</NavLink>
            
         
          
            
              <NavLink to="/Profile">Profile</NavLink>
           
        
        </ul>
      </div>
      <div className="login flex gap-2 items-center md:navbar-end">
        <div className="relative group">
          {user && user?.email ? (
            <div className="tooltip tooltip-bottom" data-tip={displayName}>
              <img
                src={user?.photoURL}
                className="w-10 h-10 mt-2 rounded-full cursor-pointer"
                alt="User"
              />
            </div>
          ) : (
            <img src="" alt="" />
          )}
        </div>
        {user && user?.email ? (
          <button
            onClick={logout}
            className="btn bg-green-500 hover:bg-green-600 text-white rounded-xl"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn  bg-green-500 hover:bg-green-600 text-white rounded-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
