import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState(
    user?.displayName || ""
  );
  const [photoURL, setPhotoURL] = useState(
    user?.photoURL || ""
  );

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
      });

      toast.success("Profile updated successfully 🎉");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={photoURL || user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border object-cover"
          />
        </div>

        <form onSubmit={handleUpdateProfile}>
          {/* Name */}
          <label className="block mb-1 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border px-3 py-2 rounded mb-3"
            required
          />

          {/* Photo URL */}
          <label className="block mb-1 text-sm font-medium">
            Profile Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter image URL"
            className="w-full border px-3 py-2 rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
