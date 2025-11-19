import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../../Pages/Login/login.css"; // external CSS
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "viveka@gmail.com" && password === "viveka1425") {
            navigate("/Test");
        }
    };


    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>
                <p className="login-sub">Hey! Enter your details to sign in to your account</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-wrap">
                        <input
                            type="email"
                            placeholder="Enter your username/email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-wrap">
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowPass(!showPass)}>
                            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                        </span>
                    </div>

                    <button type="submit" className="login-btn">Login </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
