import { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import bellImg from "../assets/bell.svg"

const NavbarComponent = () => {
  const token = localStorage.getItem("token")
  useEffect(() =>{
    document.addEventListener("scroll", () => {
      let header = document.querySelector('.navbar-container');
      if (window.scrollY > 150) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    })
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    window.location = "/"
  }

  return (
    <Navbar bg="light" expand="md" className="navbar-container scrolled">
      <Container>
        <Navbar.Brand href="/" className="navbar-title">
          Zwallet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-menu">
            {
              token?(
                <>
                  <div className='me-3'>
                    <Dropdown>
                      <Dropdown.Toggle variant="" className='dropdown-title'>
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" className='navbar-profile-picture' alt="" srcSet="" />
                        <div className='navbar-profile-information'>
                          <strong>Robert Chandler</strong>
                          <p>+62 8139 3877 7946</p>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='mt-3 dropdown-menu'>
                        <Link to="/profile" className='dropdown-item'>My Profile</Link>
                        <button onClick={handleLogout} className='dropdown-item'>Logout</button>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <button className='btn'>
                    <img src={bellImg} alt="" />
                  </button>
                </>
              ):(
                <>
                  <Link to="/login" className="navbar-action navbar-action-login">
                    Login
                  </Link>
                  <Link to="/register" className="navbar-action navbar-action-signup">
                    Sign Up
                  </Link>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
