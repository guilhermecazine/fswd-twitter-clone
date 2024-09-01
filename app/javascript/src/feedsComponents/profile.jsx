import React from 'react'


import { safeCredentials, handleErrors } from '../utils/fetchHelper'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'user',
    };

    this.getUsername = this.getUsername.bind(this);
  }

  logout = e => {
    e.preventDefault();

    fetch('api/sessions', safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(data => {
      if(data.success) {
        this.setState({
          authenticated: false,
        })
        window.location.href = '/'
      }
    })
    .catch(error => {
      this.setState({
        error: 'Sign out failed',
      })
    })
  }

  componentDidMount() {
    this.getUsername();
  }

  getUsername = () => {
    fetch('/api/authenticated', safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then((data) => {
      this.setState({
        username: data.username
      })
    })
  }

  render() {
    const { username } = this.state;
    
    return (
          <div className="border rounded border-primary">
            <div className="row profile-content">
              <div className="col-9 user">
                <a className="username ps-2 fw-bold" href="#">{username}</a>
                <br />
                <a className="screenName text-decoration-none ps-2" href="#">@{username}</a>
              </div>
              <div className="col-3 logout pt-2">
                <form onSubmit={this.logout}>
                  <button className="btn btn-primary btn-sm float-end" type="submit" size="sm" variant="link">
                    Logout
                  </button>
                </form>
              </div>
            </div>
      </div>
    )
  }
}

export default Profile