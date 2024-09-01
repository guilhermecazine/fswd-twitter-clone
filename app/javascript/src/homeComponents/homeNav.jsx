import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


function HomeNav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <a href="/"><i className="fa-brands fa-twitter"></i></a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <NavDropdown title="English">
              <NavDropdown.Item href="#">French</NavDropdown.Item>
              <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
              <NavDropdown.Item href="#">German</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default HomeNav