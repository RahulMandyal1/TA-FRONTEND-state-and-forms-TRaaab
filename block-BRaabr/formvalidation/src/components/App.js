import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email : "",
      password: "",
      bio: "",
      userprofile : "",
      error: {
        emailErr: "",
        passwordErr: "",
        bioErr: "",
        profileErr : "",
      },
    };
  }
  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  handleValidation = ({ target }) => {
    let { name, value } = target;
    let error = this.state.error;

    // before setting states and rendering the user interface let,s check
    // if all the input from user is according to us
    switch (name) {
      case "email":
        error.emailErr = this.validateEmail(value) ? " " : "email is not valid!";
        break;
      case "password":
        error.passwordErr = value.length < 6 ? " password is too short" : "";
        break;
      case "bio":
        error.bioErr = value.length < 20 ? "Bio is too short" : "";
        break;
      case "userprofile" : 
      error.profileErr = value.endsWith(".png") ? "enter a jpg type image" : "";
      break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      error 
    });
  };

  render() {
    let {emailErr , passwordErr , bioErr ,profileErr} =  this.state.error;
    return (
      <>
        <section>
          <form>
            <div className="form-group">
              <label htmlFor="username">username : </label>
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleValidation}
                placeholder="enter username here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email : </label>
              <input
                type="text"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleValidation}
                placeholder="enter email here"
                className={emailErr ? "error" : ""}
              />
               <span>{emailErr}</span>
            </div>
            <div className="form-group">
              <label htmlFor="dateofbirth">dateofbirth : </label>
              <input type="date" name="dateofbirth" id="dateofbirth" />
            </div>
            <div className="form-group">
              <label htmlFor="password">password : </label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleValidation}
                className={passwordErr ? "error" : ""}
                placeholder="enter your password here"
              />
              <span>{passwordErr}</span>
            </div>
            <div className="form-group">
              <label htmlFor="bio">bio : </label>
              <textarea
                type="text"
                name="bio"
                id="bio"
                value={this.state.bio}
                onChange={this.handleValidation}
                className={bioErr  ? "error"  : " "}
                placeholder="enter bio here"
                rows="5"
              />
               <span>{bioErr}</span>
            </div>
            <div className="form-group">
              <label htmlFor="user profile">user profile : </label>
              <input
                type="file"
                name="userprofile"
                id="userprofile"
                onChange={this.handleValidation}
              />
              <span>{profileErr}</span>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default App;
