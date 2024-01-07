import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CostChart = () => {
    const uniqueData = [
        { name: 'Day 1', REVENUE: 40, PROFIT: 20 },
        { name: 'Day 2', REVENUE: 42, PROFIT: 21 },
        { name: 'Day 3', REVENUE: 52, PROFIT: 25 },
        { name: 'Day 4', REVENUE: 45, PROFIT: 12 },
        { name: 'Day 5', REVENUE: 28, PROFIT: 15 },
        { name: 'Day 6', REVENUE: 25, PROFIT: 12 },
        { name: 'Day 7', REVENUE: 34, PROFIT: 18 },
      ];

  return (
    <BarChart width={600} height={400} data={uniqueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="REVENUE" fill="#A27AF1" />
      <Bar dataKey="PROFIT" fill="#7ED957" />
    </BarChart>
  );
};

export default CostChart;
