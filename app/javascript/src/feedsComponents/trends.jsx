import React from 'react'

function Trends() {
  return (
    <React.Fragment>
      <div className="border rounded border-primary my-3">
        <div className="text-muted ms-2">
          <span className="fw-bold">Trends</span>
        </div>
        <ul className="list">
          <li><a href="#" className="ms-2">#twtter</a></li>
          <li><a href="#" className="ms-2">#elon</a></li>
          <li><a href="#" className="ms-2">#ukraine</a></li>
          <li><a href="#" className="ms-2">#ticketmaster</a></li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Trends