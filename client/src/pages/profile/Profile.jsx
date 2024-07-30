import "./profile.scss";
import ProfileListing from "../../components/profileListing/ProfileListing";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {

    const navigate = useNavigate();

    const { currentUser, updateUser } = useContext(AuthContext);

    const handleLogout = async (e) => {
        try {
            const res = await apiRequest.post("/auth/logout");
            updateUser(null);
            localStorage.removeItem("user")
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="profile">
            <div className="profile-details">
                <div className="wrapper">
                    <div className="title">
                        <h3>Your Profile</h3>
                        <Link to="/profile/update">
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>
                            Profile Picture:
                            <img src={currentUser.avatar || "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
                        </span>
                        <span>Username: <strong>{currentUser.username}</strong></span>
                        <span>E-mail: <strong>{currentUser.email}</strong></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h3>Your List</h3>
                        <Link to="/create">
                            <button>Create New Post</button>
                        </Link>
                    </div>
                    <ProfileListing />
                    <div className="title">
                        <h3>Your Saved List</h3>
                    </div>
                    <ProfileListing />
                </div>
            </div>
            <div className="profile-chat">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Profile;