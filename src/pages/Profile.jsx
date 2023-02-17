import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import arrowRightImg from "../assets/arrow-right.svg";
import PinInput from 'react-pin-input';


export const Profile = () => {
  const navigate = useNavigate()
  const [modalChangePassword, setModalChangePassword] = useState(false)
  const [modalChangePin, setModalChangePin] = useState(false)
  const [modalEditProfile, setModalEditProfile] = useState(false)
  const handleLogout = () => {
    localStorage.clear()
    window.location = "/"
  }
  const handleChangePassword = () => {
    alert("Password changed")
    setModalChangePin(false)
  }
  const handleChangePin = () => {
    alert("Pin changed")
    setModalChangePassword(false)
  }
  const handleEditProfile = () => {
    alert("Profile changed")
    setModalEditProfile(false)
  }
  return (
    <div>
      <Navbar />
      <div className="wrap-content wrap-main">
        <Sidebar />
        <div className="wrap-dashboard">
          <section className="profile-container">
            <div className="profile-info">
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
              <button>Edit Photo</button>
              <h1>Robert Chandler</h1>
              <p>+62 813-9387-7946</p>
            </div>
            <div className="profile-actions">
              <div className="link-container">
                <button onClick={() => setModalEditProfile(true)} className="link">
                  <h6 className="">Personal Information</h6>
                  <img src={arrowRightImg} alt="" />
                </button>
              </div>
              <div className="link-container">
                <button onClick={() => setModalChangePassword(true)} className="link">
                  <h6 className="">Change Password</h6>
                  <img src={arrowRightImg} alt="" />
                </button>
              </div>
              <div className="link-container">
                <button onClick={() => setModalChangePin(true)} className="link">
                  <h6 className="">Change PIN</h6>
                  <img src={arrowRightImg} alt="" />
                </button>
              </div>
              <div className="link-container">
                <button onClick={handleLogout} className="link">
                  <h6 className="">Logout</h6>
                  <img src={arrowRightImg} alt="" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Modal show={modalEditProfile} onHide={() => setModalEditProfile(false)} className="">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
          <div className="">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username :</label>
                <input type="text" name="username" className="form-control" placeholder="Enter your username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" className="form-control" placeholder="Enter your e-mail" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone :</label>
                <input type="text" name="phone" className="form-control" placeholder="Enter your phone number" />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <button onClick={() => handleEditProfile()} className="btn btn-primary transfer-action">Edit Profile</button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalChangePassword} onHide={() => setModalChangePassword(false)} className="">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>You must enter your current password and then type your new password twice.</p>
          <div className="">
            <form>
              <div className="form-group">
                <label htmlFor="current-password">Current Password :</label>
                <input type="password" name="current-password" className="form-control" placeholder="Enter current password" />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password :</label>
                <input type="password" name="new-password" className="form-control" placeholder="Enter new password" />
              </div>
              <div className="form-group">
                <label htmlFor="repeat-new-password">Repeat New Password :</label>
                <input type="password" name="repeat-new-password" className="form-control" placeholder="Enter repeat new password" />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <button onClick={() => handleEditProfile()} className="btn btn-primary transfer-action">Change Password</button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalChangePin} onHide={() => setModalChangePin(false)} className="">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Enter PIN to Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>Enter your current 5 digits Zwallet PIN below to continue to the next steps.</p>
          <div className="d-flex justify-content-center align-items-center">
            <PinInput 
              length={5} 
              initialValue=""
              secret 
              onChange={(value, index) => {}} 
              type="numeric" 
              inputMode="number"
              style={{padding: '0px'}}  
              inputStyle={{borderRadius: '10px', margin: '4px'}}
              inputFocusStyle={{borderColor: '#6379F4'}}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <button onClick={() => handleChangePin()} className="btn btn-primary transfer-action">Change Pin</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
