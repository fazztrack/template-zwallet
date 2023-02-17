import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export const TransferNominal = () => {
  const navigate = useNavigate()
  const handleSubmit = (id) => {
    navigate(`/transfer/${id}/detail`)
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
            <p className="description">
            Type the amount you want to transfer and then
            press continue to the next steps.
            </p>
            <div className="transfer-nominal">
              <input type="text" className="transfer-input" placeholder="0.00" />
              <p className="saldo-available">Rp 120.000 Available</p>
              <input type="text" className="transfer-description" placeholder="Add some notes"/>
            </div>
            <div className="pt-5 mt-5">
              <button onClick={() => handleSubmit(12)} className="btn btn-primary transfer-action">Continue</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
