import React, {Component} from 'react';

export default class Signup extends Component{
  render() {
    return(
      <div>
        <input id="userSign" onChange={this.props.trackSignup} type="text" placeholder="username"/>
        <input id="passSign" onChange={this.props.trackSignup} type="text" placeholder="password"/>
        <button onClick={this.props.postSignup}>Signup</button>
      </div>
    )
  }
}
