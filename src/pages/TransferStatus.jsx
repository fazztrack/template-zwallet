import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import transferSuccessImg from "../assets/transfer-success.svg"
import transferFailedImg from "../assets/transfer-failed.svg"
import { Link } from "react-router-dom";

export const TransferStatus = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap-content wrap-main">
        <Sidebar />
        <div className="wrap-dashboard">
          <section className="transfer-container">
            <div className="mt-3 mb-3 d-flex justify-content-center align-items-center flex-column">
              {/* <img src={transferSuccessImg} alt="" />
              <p className="mt-3">Transfer Success</p> */}
              <img src={transferFailedImg} alt="" />
              <p className="mt-3">Transfer Failed</p>
            </div>
            <div className="mt-5 mb-3">
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
            <div className="mt-5">
              <h1>Transfer to</h1>
              <div className="receiver-item">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div>
                  <h6>Samuel Suhi</h6>
                  <p>+62 813-8492-9994</p>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5 text-end">
              <Link to="/" className="btn btn-secondary me-3">Download PDF</Link>
              <Link to="/dashboard" className="btn btn-primary">Back To Home</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
