// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SalesOverviewGraph from './components/SalesOverviewGraph';
import SalesByRegionMap from './components/SalesByRegionMap';
import TopProductsTable from './components/TopProductsTable';
import FilterControls from './components/FilterControls';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Component */}
      <Header />

      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="ml-64 pt-16 p-4">

        {/* Filter Controls */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <FilterControls />
        </div>

        {/* Sales Overview Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
          <SalesOverviewGraph />
        </section>

        {/* Sales by Region Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sales by Region</h2>
          <SalesByRegionMap />
        </section>

        {/* Top Products Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Top Products</h2>
          <TopProductsTable />
        </section>

      </main>
    </div>
  );
};

export default App;
