import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-item square">
        <h3>Current Students</h3>
        <p>75+</p>
      </div>
      <div className="stat-item circle">
        <h3>Teachers</h3>
        <p>13+</p>
      </div>
      <div className="stat-item triangle">
        <h3>Staff</h3>
        <p>5+</p>
      </div>
    </div>
  );
};

export default Stats;
