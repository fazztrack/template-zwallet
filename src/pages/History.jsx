import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import arrowDownGreenImg from "../assets/arrow-down-green.svg"
import arrowUpRedImg from "../assets/arrow-up-red.svg"
import { Link } from "react-router-dom";

export const History = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap-content wrap-main">
        <Sidebar />
        <div className="wrap-dashboard">
          <section className="dashboard-content">
            <div className="dashboard-histories">
              <div className="dashboard-history-title">
                <h1>Transaction History</h1>
              </div>
              {/* History Item */}
              <div className="dashboard-history-content">
                <div className="dashboard-history-content-item">
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
                  <div className="dashboard-history-content-item-name">
                    <h6>Samuel Suhi</h6>
                    <small>Transfer</small>
                  </div>
                  <div className="dashboard-history-content-item-nominal nominal-green">
                    +Rp50.000
                  </div>
                </div>
              </div>
              <div className="dashboard-history-content">
                <div className="dashboard-history-content-item">
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
                  <div className="dashboard-history-content-item-name">
                    <h6>Samuel Suhi Bin Agureo</h6>
                    <small>Transfer</small>
                  </div>
                  <div className="dashboard-history-content-item-nominal nominal-red">
                    -Rp50.000
                  </div>
                </div>
              </div>
              {/* History Item */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
