import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export const TopUp = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap-content wrap-main">
        <Sidebar />
        <div className="wrap-dashboard">
          <section className="transfer-container">
            <h1>How To Top Up</h1>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">1.</strong>
                  <p>Go to the nearest ATM or you can use E-Banking.</p>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">2.</strong>
                  <p>Type your security number on the ATM or E-Banking.</p>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">3.</strong>
                  <p>Select “Transfer” in the menu</p>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">4.</strong>
                  <p>Type the virtual account number that we provide you at the top.</p>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">5.</strong>
                  <p>Type the amount of the money you want to top up.</p>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">6.</strong>
                  <p>Read the summary details</p>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">7.</strong>
                  <p>Press transfer / top up</p>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3">
              <div className="receiver-item">
                <div className="d-flex align-items-center">
                  <strong className="me-3">8.</strong>
                  <p>You can see your money in Zwallet within 3 hours.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
