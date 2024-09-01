import React from 'react'
import ReactDOM from 'react-dom'

import './feeds.scss'
import FeedsNav from './feedsNav'
import Trends from './trends'
import FeedBox from './feedbox'
import Profile from './profile'



class Feeds extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FeedsNav />
        <div className="main container">
          <div className="row">
            <div className="col-3">
              <Profile />
              <Trends />
            </div>
            <FeedBox />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})