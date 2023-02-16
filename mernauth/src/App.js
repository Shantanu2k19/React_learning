import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      email:'',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);
    return;

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
         <div>
            <label>Username: </label>
            <input  type="text"
               required
               value={this.state.username}
               onChange={this.onChangeUsername}
               />
            <hr/>
         </div>

          <div>
              <label>Email: </label>
              <input  type="text"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
              <hr/>
          </div>

          <div>
              <label>Password: </label>
              <input  type="text"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                />
              <hr/>
          </div>

          <div>
            <input type="submit" value="Create User"/>
         </div>
      </form>
   </div>
  )
  }
}