import React, { useState } from "react";
import Logo from "../../assets/images/Respond_Logo_icon_fullcolor.png";
import Footer from "../../components/Footer/Footer";
import './ForgotPassword.css';
import { auth } from "../../firebase";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../components/Auth/Auth.js";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const mainAuth = useAuth();

  const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[[]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  const getErrorMessage = () => {
    return error ? (
      <div>
        <p className="ErrorMessage"> {error} </p>
      </div>
    ) : (
      <div></div>
    );
  };

  const updateEmail = (e) => {
    this.setState({email: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call BE API to send password reset email, handle history correctly.
  };

  return (
    <div className="ForgotPassword">
      <div className="UserInformation"> 
        <img className="Logo" src={Logo} width={50} height={50} alt="Respond Crisis Translation Logo"/>
        <br/>
        <br/>

        <h4>Retrieve password</h4>
        <h5>Type in your registered email address and click Send.</h5>
        <form>
        <label>
        Email:
        <br/>
        <input
          type="email"
          name="email_account"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email address here"
        />
        </label>
        <br/>
        <br/>
        <input type="submit" value="Send" />
        </form>
        <br />
        {getErrorMessage()} 
        <h5>We will send a link to your email address with instructions to reset your password.</h5>
        </div>
        <Footer/>
        </div>
  );
}

export default ForgotPassword;
