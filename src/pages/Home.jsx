import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import arrowDownGreenImg from "../assets/arrow-down-green.svg"
import arrowUpRedImg from "../assets/arrow-up-red.svg"
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: true,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      },
    },
    y: {
      grid: {
        display: false
      },
      ticks: {
        display: false,
      },
    }
  },
};

export const Home = () => {
  const [chartData, setChartData] = useState([9,3,4,5,6,7,8])
  const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Income & Expense',
        data: chartData,
        backgroundColor: '#6379F4',
        borderRadius: 50,
        borderSkipped: false,
        barThickness: 20,
      },
    ],
  };
  return (
    <div>
      <Navbar />
      <div className="wrap-content wrap-main">
        <Sidebar />
        <div className="wrap-dashboard">
          <Overview />
          <section className="dashboard-content">
            <div className="dashboard-chart">
              <div className="dashboard-chart-overview">
                <div className="dashboard-chart-overview-income-expense">
                  <img src={arrowDownGreenImg} alt="" />
                  <p>Income</p>
                  <h6>Rp2.120.000</h6>
                </div>
                <div className="dashboard-chart-overview-income-expense">
                  <img src={arrowUpRedImg} alt="" />
                  <p>Expense</p>
                  <h6>Rp2.120.000</h6>
                </div>
              </div>
              <div className="mt-3">
                <Bar options={options} data={data} className="w-100 h-100" />
              </div>
            </div>
            <div className="dashboard-history">
              <div className="dashboard-history-title">
                <h1>Transaction History</h1>
                <Link to="/history" className="link">See All</Link>
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
