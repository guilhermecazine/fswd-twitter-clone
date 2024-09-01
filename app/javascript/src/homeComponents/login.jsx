import React, { Component } from 'react'
import { safeCredentials, handleErrors } from '../utils/fetchHelper';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      authenticated: false,
    };

    
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        }
      }),
    }))
    .then(handleErrors)
    .then(data => {
      console.log("data: ", data)
      if (data.success) {
        this.setState({
          username: '',
          password: '',
          authenticated: true,
        })
        window.location.href = '/feeds'
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('log in failed!')
    })
  }

  render() {
    return (
      <div className="card p-2 mb-2 border border-primary" style={{ maxWidth: "22rem" }}>
        <div className="log-in-title card-title"><h3>Login</h3></div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="username" value={this.username} onChange={this.handleChange} className="form-control username mb-2 border border-primary shadow" placeholder="username"/>
          </div>
          <div className="form-group col-xs-8">
            <input type="password" name="password" value={this.password} onChange={this.handleChange} className="form-control password my-2 border border-primary shadow" placeholder="password"></input>
          </div>
          <button type="submit" className="btn btn-default btn-primary col-xs-3 float-right">Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;