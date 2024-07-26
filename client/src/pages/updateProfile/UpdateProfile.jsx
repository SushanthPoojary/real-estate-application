import { useContext } from "react";
import "./updateProfile.scss";
import { AuthContext } from "../../context/AuthContext";

function UpdateProfile() {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className="update-profile">
            <div className="form-cont">
                <form>
                    <h1>Update Profile</h1>
                    <img className="avatar-small" src={currentUser.avatar || "/avatar.png"} alt="" />
                    <input name="username" type="text" placeholder="Username" defaultValue={currentUser.username} />
                    <input name="email" type="text" placeholder="Email" defaultValue={currentUser.email} />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Update</button>
                    {/* { error && <span>{error}</span> } */}
                </form>
            </div>
            <div className="avatar-cont">
                <img src={currentUser.avatar || "/avatar.png"} alt="" />
            </div>
            {/* <SideImage /> */}
        </div>
    );
}

export default UpdateProfile;