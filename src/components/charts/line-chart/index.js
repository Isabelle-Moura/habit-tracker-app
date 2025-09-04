import React from "react";
import { LineChart as LineChartRecharts, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function LineChart({ data, dataKey, stroke, xAxisKey }) {
  return (
    <LineChartRecharts width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisKey} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey={dataKey} stroke={stroke} />
    </LineChartRecharts>
  );
}

export default LineChart;
