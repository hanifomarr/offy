import apiRequest from "../../libs/apiRequest";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ handleLogout ~ error:", error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
