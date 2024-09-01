import React from 'react'

import { safeCredentials, handleErrors } from '../utils/fetchHelper'

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    };

    this.deleteTweet = this.deleteTweet.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }

  componentDidMount() {
    this.getUsername();
  }

  getUsername() {
    fetch('/api/authenticated', safeCredentials({
      method: 'GET',
    }))
    .then(handleErrors)
    .then(data => {
      this.setState({
        username: data.username
      });
    })
  }

  deleteTweet = e => {
    e.preventDefault();
    let tweetElement = e.target.closest('.tweet-inner');
    let tweetId = tweetElement.getAttribute('id');

    fetch(`/api/tweets/${tweetId}`, safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(data => {
      console.log("data:", data);
      if(data.success) {
        this.props.getAllTweets();
      }
    })
    .catch(error => {
      this.setState({
        error: 'You cannot delete this tweet'
      })
    })
  }

  render() {
    const { tweets } = this.props;

    return (
      <React.Fragment>
        <div 
          style={ {maxWidth: "700px", paddingTop: "65px"} } 
          className="tweets">
          <div className="tweet-content">
            {tweets.map(tweet => {
              return (
                <div key={tweet.id} id={tweet.id} className="border border-primary bg-light rounded row d-flex py-2 my-2 tweet-inner">
                  <div className="col-12">
                    <div className="row d-flex flex-column tweet-details">
                      <div className="col d-flex justify-content-between">
                        <div>
                          <span className="tweet-name"><b>{tweet.username}</b></span>
                          <a href={`/${tweet.username}`} className="p-0 tweet-username">@{tweet.username}</a>
                        </div>
                        {
                          (tweet.username == this.state.username) ?
                            <button type="button" className="btn btn-danger" onClick={this.deleteTweet}>Delete</button> : 
                            <div></div> 
                        }
                      </div>
                      <div className="col py-1">
                        <span>{tweet.message}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Tweets