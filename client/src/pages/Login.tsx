import LoginForm from '../components/LoginForm';
import React, {useState} from 'react';
import '../components/LoginStyles.css'

const Login = () => {
    const adminUser = {
        email: "admin@warehouse.com",
        password: "406"
    }

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const Login = (details: any) => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Login Successful");
            setUser({
                email: details.email,
            });
        } else {
            console.log("Credentials Invalid")
            setError("Credentials Invalid")
        }
    }

    const Logout = () => {
        console.log("Logout")
        setUser({email: ""});
    }

    return (
        <div className="App">
            {(user.email !== "") ? (
            <div className="welcome">
                <h2>
                    Welcome, <span>{user.email}</span>
                </h2>
                <button onClick={Logout}>Logout</button>
            </div>
        ) : (
            <LoginForm Login={Login} error={error} />
        )}
        </div>
    );
}

export default Login;