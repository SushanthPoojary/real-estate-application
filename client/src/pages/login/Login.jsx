import { Link } from "react-router-dom";
import "./login.scss";
import SideImage from "../../components/sideImage/SideImage";

function Login() {
    return (
        <div className="login">
            <div className="form-cont">
                <form>
                    <h1>Welcome back</h1>
                    <input name="username" type="text" placeholder="Username" />
                    <input name="password" type="password" placeholder="Password" />
                    <button>Login</button>
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
            <SideImage />
        </div>
    );
}

export default Login;