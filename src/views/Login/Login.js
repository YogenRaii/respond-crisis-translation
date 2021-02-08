import React from 'react';
import Logo from '../../assets/images/Respond_Logo_icon_fullcolor.png'
import Footer from "../../components/Footer/Footer"
import './Login.css';

export default class CreateAccount extends React.Component {
    constructor(props){
        super(props);
        // The passwords here will be viewable by "Inspect element", but this is
        // not a privacy concern as it will only be the user's own passwords.
        this.state = {
          email: "",
          password: "",
          rememberMe: false,
          error: "",
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.getErrorMessage = this.getErrorMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    componentDidMount() {
      this.setState({isChecked: false})
    }

    updateEmail(e) {
      this.setState({email: e.target.value})
    }

    updatePassword(e) {
      this.setState({password: e.target.value})
    }

    onChangeCheckbox(e) {
      this.setState({rememberMe: e.target.checked})
    }

    getErrorMessage() {
      if (this.state.error !== "") {
        return (
          <div>
            <p className="ErrorMessage"> {this.state.error} </p>
          </div> 
          )
      } else {
        return (
          <div>
          </div>
          )
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      // TODO: Call API to log into account and redirect to online portal.
      // Need the necessary return values from the API for if the account 
      // already exists, etc.
      // Email and password are available through this.state.

    }

    render() {
      let errorMessage = this.getErrorMessage();

        return (
          <div className="Login">
            <div className="UserInformation"> 
            <img className="Logo" src={Logo} width={50} height={50} alt="Respond Crisis Translation Logo"/>
            <br/>
            <br/>

            <h4>Sign in</h4>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <br/>
                <input type="email" name="email_account" onChange={this.updateEmail} placeholder="your email address here" />
              </label>
              <br/>
              <label>
                Password:
                <br/>
                <input type="password" name="password" onChange={this.updatePassword} placeholder="your password here" />
              </label>
              <br/>
              <a href="/forgotpassword">forgot password?</a>
              <br/>
              <br/>
              <input type="checkbox" checked={this.state.isChecked} name="rememberMe" onChange={this.onChangeCheckbox} />
              <label>Remember me</label>
              <br/>
              {errorMessage}
              <br/>
              <input type="submit" value="Login" />
            </form>
            </div>
            <Footer/>
          </div>
          )
    }
}