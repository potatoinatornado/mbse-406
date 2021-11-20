import React, {useState} from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import '../components/LoginStyles.css'

const StyledLink = styled(Link)`
  color: #666;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

function LoginForm({Login, error}: {Login:any, error:any}) {
    const [details, setDetails] = useState({email:"", password:""});

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email} placeholder="Email"/>
                </div>
                <div className="form-group">
    
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} placeholder="Password" />
                </div>
                <div className="forgot">
                    <StyledLink to="/forgotpassword"> Forgot Password? </StyledLink>
                </div>
                <input type="submit" value="Login"/>
                <div className="register">
                    <StyledLink to="/register"> Need an Account? Register. </StyledLink>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;