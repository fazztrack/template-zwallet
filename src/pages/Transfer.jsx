import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import searchReceiverImg from "../assets/search-receiver.svg"
import arrowUpRedImg from "../assets/arrow-up-red.svg"
import { Link } from "react-router-dom";

export const Transfer = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap-content wrap-main">
        <Sidebar />
        <div className="wrap-dashboard">
          <section className="transfer-container">
            <h1>Search Receiver</h1>
            <div className="mt-3 mb-3 form-group">
            <div className="input-group">
              <span className="input-group-text">
                <img src={searchReceiverImg} alt="" />
              </span>
              <input type="search" className="form-control" placeholder="Search receiver here" />
            </div>
            </div>
            <div className="ps-1 pe-1">
              <Link to={`/transfer/10`} className="receiver-item">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div>
                  <h6>Samuel Suhi</h6>
                  <p>+62 813-8492-9994</p>
                </div>
              </Link>
              <Link to={`/transfer/12`} className="receiver-item">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div>
                  <h6>Samuel Suhi</h6>
                  <p>+62 813-8492-9994</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
