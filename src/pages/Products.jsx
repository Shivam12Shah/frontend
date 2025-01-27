import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductList from '../components/ProductList';

const Products = () => {
  const [filters, setFilters] = useState({
    categories: [],
    sports: [],
    priceRange: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-1/4">
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>
        
        {/* Main Content */}
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>
          <ProductList filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Products; 