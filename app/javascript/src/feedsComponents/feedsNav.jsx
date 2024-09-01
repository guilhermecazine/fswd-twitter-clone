import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

<a href="/"><i className="fa-brands fa-twitter"></i></a>

class FeedsNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-default navbar-fixed-top mb-3">
          <div className="container">
            <div className="navbar-header">
              <a href="/"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className="search-bar col-xs-3 nav ms-auto justify-content-end">
              <div className="input-group">
                <input type="text" className="form-control search-input" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default search-btn btn-primary" type="button">Go</button>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default FeedsNav