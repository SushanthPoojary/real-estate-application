import "./profile.scss";
import ProfileListing from "../../components/profileListing/ProfileListing";

function Profile() {
    return (
        <div className="profile">
            <div className="profile-details">
                <div className="wrapper">
                    <div className="title">
                        <h3>Your Profile</h3>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Profile Picture:
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        </span>
                        <span>Username: <strong>Sushanth Poojary</strong></span>
                        <span>E-mail: <strong>sp@mail.com</strong></span>
                    </div>
                    <div className="title">
                        <h3>Your List</h3>
                        <button>Add</button>
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

                </div>
            </div>
        </div>
    )
}

export default Profile;