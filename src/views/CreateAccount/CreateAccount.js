import React from 'react';
import Logo from '../../assets/images/Respond_Logo_icon_fullcolor.png'
import Footer from "../../components/Footer/Footer"
import './CreateAccount.css';

export default class CreateAccount extends React.Component {
    constructor(props){
        super(props);
        // The passwords here will be viewable by "Inspect element", but this is
        // not a privacy concern as it will only be the user's own passwords.
        this.state = {
          email: "",
          password: "",
          confirmPassword: ""
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    componentDidMount() {
        this.setState()
    }

    updateEmail(e) {
      this.setState({email: e.target.value})
    }

    updatePassword(e) {
      this.setState({password: e.target.value})
    }

    updateConfirmPassword(e) {
      this.setState({confirmPassword: e.target.value})
    }

    handleSubmit(e) {
      // Do we want the password to meet any requirements?
      // Ex: 8 characters, 1 special character, etc.
      if (this.state.password !== this.state.confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match. Please fix.")
      } else if (this.state.password === "") {
        e.preventDefault();
        alert("Password cannot be empty.")
      } else {
      // TODO: Call API to create account and redirect to online portal.
      // Need the necessary return values from the API for if the account 
      // already exists, etc.
      // Email and password are available through this.state.
      }
    }

    render() {
        return (
          <div className="CreateAccount">
            <div className="UserInformation"> 
            <img className="Logo" src={Logo} width={50} height={50} alt="Respond Crisis Translation Logo"/>
            <br/>
            <br/>

            <h4>Create login information</h4>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email (account name):
                <br/>
                <input type="email" name="email_account" onChange={this.updateEmail} placeholder="please type your email address here" />
              </label>
              <br/>
              <label>
                Create a password:
                <br/>
                <input type="password" name="password" onChange={this.updatePassword} placeholder="password here" />
              </label>
              <br/>
              <label>
                Please re-enter your password:
                <br/>
                <input type="password" name="confirm-password" onChange={this.updateConfirmPassword} placeholder="password here" />
              </label>
              <br/>
              <br/>
              <input type="submit" value="Complete" />
            </form>
            </div>
            <Footer/>
          </div>
          )
    }
}