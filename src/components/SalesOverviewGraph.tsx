// src/components/SalesOverviewGraph.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01-01', sales: 2400 },
  { date: '2024-02-01', sales: 2210 },
  { date: '2024-03-01', sales: 2290 },
  { date: '2024-04-01', sales: 2000 },
];

const SalesOverviewGraph = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverviewGraph;
