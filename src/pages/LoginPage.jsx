import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, isAuthLoading, authError } = useAuth();
    const navigate = useNavigate();

    const isEmailEmpty = email.trim() === "";
    const isPasswordEmpty = password.trim() === "";


    async function submit(){
        if (isEmailEmpty || isPasswordEmpty || isAuthLoading) return;

        try {
            await login(email, password);
            navigate("/");
        }
        catch(err){}
    }

    
    return (
    <div className="login-page">

        <h2>Login</h2>

        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
         />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
         />

        {authError && <p className="error-message">{authError}</p>}

         <button disabled={isEmailEmpty || isPasswordEmpty || isAuthLoading} onClick={submit}>
            {isAuthLoading ? "Logging in..." : "Login"}
         </button>
         
    </div>
    );
}

export default LoginPage;