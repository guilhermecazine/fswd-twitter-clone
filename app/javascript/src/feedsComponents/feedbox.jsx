import React from 'react'
import NewTweet from './newtweet'
import { handleErrors } from '../utils/fetchHelper'
import Tweets from './tweets'

class FeedBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      tweets: [],
    }
  }

  componentDidMount() {
    this.getAllTweets();
  }

  getAllTweets = () => {
    fetch('/api/tweets')
    .then(handleErrors)
    .then(data => {
      console.log('data: ', data);
      this.setState({
        tweets: data.tweets
      })
    })
  }
  
  render() {
    const { username, tweets } = this.state;
  
    return (
      <React.Fragment>
        <div className="col-9 feed-box border-primary rounded">
          <NewTweet tweets={tweets} getAllTweets={this.getAllTweets}/>
          <div className="feed mt-5">
            <Tweets username={username} tweets={tweets} getAllTweets={this.getAllTweets}/>
            
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default FeedBox