import { useContext, useState } from "react";
import "./updateProfile.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadImageWidget from "../../components/uploadImageWidget/UploadImageWidget";

function UpdateProfile() {
    const [err, setErr] = useState(null);
    const { currentUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        // console.log(formdata);

        const { username, email, password } = Object.fromEntries(formdata);
        // console.log(username, email, password);

        try {
            const res = await apiRequest.put(`/users/${currentUser.id}`, {
                username,
                email,
                password,
                avatar: avatar[0]
            });
            console.log(res.data);

            updateUser(res.data);
            // updateUser()
            navigate("/profile");
        } catch (err) {
            console.log(err);
            setErr(err.response.data.message);
        }
    }

    return (
        <div className="update-profile">
            <div className="form-cont">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <img className="avatar-small" src={currentUser.avatar || "/avatar.png"} alt="" />
                    <input name="username" type="text" placeholder="Username" defaultValue={currentUser.username} />
                    <input name="email" type="text" placeholder="Email" defaultValue={currentUser.email} />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Update</button>
                    {err && <span>{err}</span>}
                </form>
            </div>
            <div className="avatar-cont">
                <img src={avatar[0] || currentUser.avatar || "/avatar.png"} alt="" />
                <UploadImageWidget
                    uwConfig={{
                        cloudName: "sushanthsp",
                        uploadPreset: "estate",
                        multiple: false,
                        maxImageFileSize: 2000000,
                        folder: "avatars"
                    }}
                    setState={setAvatar}
                    />
            </div>
            {/* <SideImage /> */}
        </div>
    );
}

export default UpdateProfile;