import React from "react";

function StatsCard({ title, value, description }) {
  return (
    <div className="stats-card">
      <h3 className="stats-title">{title}</h3>
      <p className="stats-value">{value}</p>
      {description && <p className="stats-description">{description}</p>}
    </div>
  );
}

export default StatsCard;
