import "./profile.scss";
import ProfileListing from "../../components/profileListing/ProfileListing";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {

    const posts = useLoaderData();
    // console.log(posts);
    
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
                    {/* <ProfileListing /> */}
                    <Suspense fallback={<p>Loading Posts...</p>}>
                        <Await
                            resolve={posts.postResponse}
                            errorElement={
                                <p>Error loading package location!</p>
                            }
                        >
                            {(postResponse) => (
                                <ProfileListing posts={postResponse.data.userPosts} />
                            )}
                        </Await>
                    </Suspense>
                    <div className="title">
                        <h3>Your Saved List</h3>
                    </div>
                    {/* <ProfileListing /> */}
                    <Suspense fallback={<p>Loading Posts...</p>}>
                        <Await
                            resolve={posts.postResponse}
                            errorElement={
                                <p>Error loading package location!</p>
                            }
                        >
                            {(postResponse) => (
                                <ProfileListing posts={postResponse.data.savedPosts} />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="profile-chat">
                <div className="wrapper">
                    <Suspense fallback={<p>Loading chats...</p>}>
                            <Await
                                resolve={posts.chatResponse}
                                errorElement = {
                                    <p>Error Loading Chats</p>
                                }
                            >
                                { (chatResponse) => (
                                    <Chat chats={chatResponse.data} />
                                )}
                            </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Profile;