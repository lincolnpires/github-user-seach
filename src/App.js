import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/CardList";
import AddProfileForm from "./components/AddProfileForm";

// Test users: fabpot, bebraw, torvalds, gaearon, addyosmani, paulirish, necolas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "GitHub User Search",
      githubUsersEndpoint: "https://api.github.com/users/",
      profiles: [],
      userName: "",
      error: null
    };

    this.addProfile = this.addProfile.bind(this);
    this.fetchProfile = this.fetchProfile.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addProfile(profile) {
    this.setState(previousState => ({
      profiles: [...previousState.profiles, profile]
    }));
  }

  fetchProfile(event) {
    event.preventDefault();
    this.setState({error: null});
    const { githubUsersEndpoint, userName } = this.state;
    const url = githubUsersEndpoint + userName;
    fetch(url)
      .then(response => response.json())
      .then(this.handleSuccess)
      .catch(this.handleError)
      .finally(() => this.setState({ userName: '' }));
  }

  handleSuccess (data) {
    console.info("Success retrieving user from GitHub");
    if(data.message) {
      this.setState({error: data.message});
      return;
    }
    this.addProfile(data);
  }

  handleError(error) {
    console.error(error);
    this.setState({error: 'FOO! There was an error during your request. Please try again.'});
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ userName: event.target.value });
  }

  render() {
    const { title, error, profiles, userName } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{title}</h1>
        </header>
        <AddProfileForm
          handleSubmit={this.fetchProfile}
          handleChange={this.handleChange}
          userName={userName}
        />
        {error ? <p className="error">{error}</p> : <></>}
        <CardList profiles={profiles} />
      </div>
    );
  }
}

export default App;
