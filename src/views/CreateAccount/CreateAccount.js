import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/Respond_Logo_icon_fullcolor.png";
import Footer from "../../components/Footer/Footer";
import "./CreateAccount.css";
import { auth } from "../../firebase";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../components/Auth/Auth.js";

function CreateAccount() {
  const [oobCode, setOobCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [codeError, setCodeError] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const mainAuth = useAuth();

  useEffect(() => {
    const oobCode = getParameterByName("oobCode");
    setOobCode(oobCode);
    auth
      .verifyPasswordResetCode(oobCode)
      .then((email) => {
        setEmail(email);
      })
      .catch((err) => {
        setCodeError(err.message);
      });
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please fix.");
    } else if (password === "") {
      setError("Password cannot be empty.");
    } else {
      auth
        .confirmPasswordReset(oobCode, password)
        .then(() => {
          mainAuth.signin(email, password).then(
            (user) => {
              if (user && user.uid) {
                // redirect
                history.replace(from);
              } else {
                setError(
                  "Error while creating account! Please contact support."
                );
              }
            },
            (err) => {
              setError(err);
            }
          );
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    }
  };

  return (
    <div className="CreateAccount">
      <div className="UserInformation">
        <img
          className="Logo"
          src={Logo}
          width={50}
          height={50}
          alt="Respond Crisis Translation Logo"
        />
        <br />
        <br />

        <h4>Create login information</h4>
        {codeError ? (
          <section>
            <div>
              <p>{codeError}</p>
              <p>Please try resetting password!</p>
            </div>
          </section>
        ) : (
          <section>
            <form onSubmit={handleSubmit}>
              <label>
                Email (account name):
                <br />
                <input
                  readOnly={true}
                  type="email"
                  value={email}
                  name="email_account"
                />
              </label>
              <br />
              <label>
                Create a password:
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="enter password here"
                />
              </label>
              <br />
              <label>
                Please re-enter your password:
                <br />
                <input
                  type="password"
                  name="confirm-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="re-enter password here"
                />
              </label>
              <br />
              {getErrorMessage()}
              <br />
              <input type="submit" value="Complete" />
            </form>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CreateAccount;
