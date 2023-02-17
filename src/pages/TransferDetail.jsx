import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import PinInput from 'react-pin-input';

export const TransferDetail = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (id) => {
    alert("Transfer Berhasil")
    navigate(`/transfer/${id}/status`)
  }
  return (
    <div>
      <Navbar />
      <div className="wrap-content wrap-main">
        <Sidebar />
        <div className="wrap-dashboard">
          <section className="transfer-container">
            <h1>Transfer Money</h1>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div>
                  <h6>Samuel Suhi</h6>
                  <p>+62 813-8492-9994</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h1>Details</h1>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div>
                  <p>Amount</p>
                  <h6>Rp100.000</h6>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div>
                  <p>Balance Left</p>
                  <h6>Rp20.000</h6>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div>
                  <p>Date & Time</p>
                  <h6>May 11, 2020 - 12.20</h6>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div>
                  <p>Notes</p>
                  <h6>For buying some socks</h6>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5">
              <button onClick={handleShow} className="btn btn-primary transfer-action">Continue</button>
            </div>
          </section>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Enter PIN to Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <p>Enter your 5 digits PIN for confirmation to continue transferring money. </p>
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
          <button onClick={() => handleSubmit(12)} className="btn btn-primary transfer-action">Continue</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
