import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function BarChart({ data, dataKey, fill, name, xAxisKey }) {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={dataKey} fill={fill} name={name} />
    </BarChart>
  );
}

export default BarChart;
