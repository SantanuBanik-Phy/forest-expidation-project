// src/components/MyProfile.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome, {user?.displayName}!</h1>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="User" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Name: {user?.displayName}</h2>
                        <p>Email: {user?.email}</p>
                        {/* Add more profile information as needed */}
                        <Link to="/update-profile" className="btn btn-primary mt-4">Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;