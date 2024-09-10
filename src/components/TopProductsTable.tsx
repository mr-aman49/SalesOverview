// src/components/TopProductsTable.tsx
import React from 'react';

const TopProductsTable = () => {
  const products = [
    { name: 'Product A', unitsSold: 100, revenue: 1000 },
    { name: 'Product B', unitsSold: 200, revenue: 4000 },
    { name: 'Product C', unitsSold: 150, revenue: 3000 },
  ];

  return (
    <table className="min-w-full bg-white border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Product Name</th>
          <th className="py-2 px-4 border">Units Sold</th>
          <th className="py-2 px-4 border">Revenue</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="hover:bg-gray-200">
            <td className="py-2 px-4 border">{product.name}</td>
            <td className="py-2 px-4 border">{product.unitsSold}</td>
            <td className="py-2 px-4 border">{product.revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopProductsTable;
