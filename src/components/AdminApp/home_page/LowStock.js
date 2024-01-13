import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MyChart = () => {
    const originalData = [
        { name: 'Aspirin', QTY: 40, maxQTY: 100 },
        { name: 'Ibuprofen', QTY: 10, maxQTY: 20 },
        { name: 'Vicks', QTY: 12, maxQTY: 80 },
        { name: 'Nivea', QTY: 15, maxQTY: 65 },
        { name: 'E-60', QTY: 4, maxQTY: 70 },
        { name: 'Panadol', QTY: 25, maxQTY: 50 },
        { name: 'Tylenol', QTY: 18, maxQTY: 30 },
        { name: 'Advil', QTY: 30, maxQTY: 60 },
        { name: 'Neosporin', QTY: 8, maxQTY: 25 },
        { name: 'Cetaphil', QTY: 20, maxQTY: 45 },
      ];

  // Remove duplicates and append additional items
  const uniqueData = originalData.reduce((acc, current) => {
    const existingItem = acc.find(item => item.name === current.name);

    if (!existingItem) {
      acc.push(current);
    } else {
      // Add similar items with different QTY and maxQTY
      acc.push({ ...current, QTY: current.QTY + 5, maxQTY: current.maxQTY + 10 });
    }

    return acc;
  }, []);

  return (
    <BarChart width={800} height={600} data={uniqueData} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="QTY" fill="#505BF8" />
      <Bar dataKey="maxQTY" fill="#00BBFF" />
    </BarChart>
  );
};

export default MyChart;
