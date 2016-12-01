import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      something: 'something else',
      userSign: '',
      passSign: '',
      userLog: '',
      passLog: ''
    }
  }

  trackSignup(event) {
    switch (event.target.id) {
      case 'userSign': {
        this.setState({
          userSign: event.target.value
        }, () => {console.log(this.state.userSign)})
        break;
      }
      case 'passSign': {
        this.setState({
          passSign: event.target.value
        }, () => {console.log(this.state.passSign)})
        break;
      }
      case 'userLog': {
        this.setState({
          userLog: event.target.value
        }, () => {console.log(this.state.userLog)})
        break;
      }
      case 'passLog': {
        this.setState({
          passLog: event.target.value
        }, () => {console.log(this.state.passLog)})
      }

    }
  }

  postSignup(event) {
    fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.userSign,
        password: this.state.passSign
      })
    })
    .then(() => {

    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <Login
          trackSignup={event => this.trackSignup(event)}
          postSignup={event => this.postSignup(event)}
        />
        <Signup
          trackSignup={event => this.trackSignup(event)}
          postSignup={event => this.postSignup(event)}
        />
      </div>
    )
  }
}
