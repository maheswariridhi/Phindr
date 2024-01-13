import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TrendingStock = () => {
  const data = [
    { name: 'Monday', 'Cetaphil': 5, 'Retinol': 3, 'Ibuprofen': 7 },
    { name: 'Tuesday', 'Cetaphil': 3, 'Retinol': 13, 'Ibuprofen': 22 },
    { name: 'Wednesday', 'Cetaphil': 2, 'Retinol': 0, 'Ibuprofen': 29 },
    { name: 'Thursday', 'Cetaphil': 7, 'Retinol': 3, 'Ibuprofen': 20 },
    { name: 'Friday', 'Cetaphil': 8, 'Retinol': 4, 'Ibuprofen': 21 },
  ];

  const lineColor1 = "#505BF8";
  const lineColor2 = "#00BBFF";
  const lineColor3 = "#FF5757";

  const lineWidth = 4; // Set the desired line width

  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Cetaphil" stroke={lineColor1} strokeWidth={lineWidth} />
      <Line type="monotone" dataKey="Retinol" stroke={lineColor2} strokeWidth={lineWidth} />
      <Line type="monotone" dataKey="Ibuprofen" stroke={lineColor3} strokeWidth={lineWidth} />
    </LineChart>
  );
};

export default TrendingStock;
