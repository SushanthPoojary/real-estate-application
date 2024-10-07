import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import SideImage from "../../components/sideImage/SideImage";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {

    const [error, setError] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const {updateUser} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        // console.log(e.target.name);
        const formData = new FormData(e.target);
        // console.log(formData);

        const username = formData.get("username");
        // const email = formData.get("email");
        const password = formData.get("password");

        // console.log(username, password);

        try {
            const res = await apiRequest.post("/auth/login", {
                username,
                // email,
                password
            });

            updateUser(res.data);

            navigate("/");
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className="login">
            <div className="form-cont">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome back</h1>
                    <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
                    <input name="password" required type="password" placeholder="Password" />
                    <button disabled={isLoading}>Login</button>
                    { error && <span>{error}</span> }
                    <Link to="/register">Dont't you have an account?</Link>
                </form>
            </div>
            <SideImage />
        </div>
    );
}

export default Login;