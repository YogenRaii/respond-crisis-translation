import React from "react";
import Logo from "../../assets/images/Respond_Logo_icon_fullcolor.png";
import Footer from "../../components/Footer/Footer";
import "./CreateAccount.css";
import {auth} from "../../firebase";

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    // The passwords here will be viewable by "Inspect element", but this is
    // not a privacy concern as it will only be the user's own passwords.
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState();
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  updateConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Do we want the password to meet any requirements?
    // Ex: 8 characters, 1 special character, etc.
    // TODO(rohit): Render message on view instead of alerting
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match. Please fix.");
    } else if (this.state.password === "") {
      alert("Password cannot be empty.");
    } else {
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
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
          <form onSubmit={this.handleSubmit}>
            <label>
              Email (account name):
              <br />
              <input
                type="email"
                name="email_account"
                onChange={this.updateEmail}
                placeholder="please type your email address here"
              />
            </label>
            <br />
            <label>
              Create a password:
              <br />
              <input
                type="password"
                name="password"
                onChange={this.updatePassword}
                placeholder="password here"
              />
            </label>
            <br />
            <label>
              Please re-enter your password:
              <br />
              <input
                type="password"
                name="confirm-password"
                onChange={this.updateConfirmPassword}
                placeholder="password here"
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Complete" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
