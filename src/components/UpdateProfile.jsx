import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [error, setError] = useState("");

    const handleUpdateProfile = async (event) => {
        event.preventDefault();
        try {
            await updateUserProfile({ displayName: name, photoURL: photoURL });
            navigate("/"); // Navigate to the home page on success
        } catch (error) {
            console.error("Failed to update profile:", error);
            setError("An error occurred while updating your profile. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Update Your Profile</h1>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleUpdateProfile}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Update Information
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
