import { Link } from "react-router-dom";
// import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const {user,logOut } =useContext(AuthContext)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case   
 text-xl">Eco-Adventure</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    {/* {user && <li><Link to="/update-profile">Update   
 Profile</Link></li>} */}
                </ul>
            </div>
      <div className="login flex gap-2 items-center navbar-end">
        <div className=" ">
          {
            user && user?.email ? <div> <img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="" />
            <p>{user?.displayName}</p> </div> :     <img src="" alt="" />
          }
     
        </div>
        { user && user?.email ? <button onClick={logOut} className="btn bg-green-500 rounded-xl">Log out</button>  :  <Link to="/auth/login"  className="btn bg-green-500 rounded-xl">Login</Link>
         }
       
      </div>
    </div>
  );
};

export default Navbar;
