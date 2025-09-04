import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function LineChart({ data, dataKey, stroke, xAxisKey }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisKey} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey={dataKey} stroke={stroke} />
    </LineChart>
  );
}

export default LineChart;
