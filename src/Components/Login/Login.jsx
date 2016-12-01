import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return(
      <div>
        <input id="userLog" onChange={this.props.trackSignup} type="text" placeholder="username"/>
        <input id="passLog" onChange={this.props.trackSignup} type="text" placeholder="password"/>
        <button onClick={this.props.postSignup}>Login</button>
      </div>
    )
  }
}
