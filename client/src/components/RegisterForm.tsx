import React, {useState} from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import '../components/RegisterStyles.css'

const StyledLink = styled(Link)`
  color: #666;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

function RegisterForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Register</h2>
                <div className="form-group">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" id="password" placeholder="Verify Password" />
                </div>
                <Link to="/login"><input type="submit" value="Register"/></Link>
                <div className="login">
                    <StyledLink to="/login">Already Have an Account? Login. </StyledLink>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm;