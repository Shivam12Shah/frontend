import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    categories: '',
    sports: '',
    priceRange: 'all'
  });

  const categories = ['All', 'Clothing', 'Footwear', 'Equipment', 'Accessories'];
  const sports = ['All', 'Football', 'Basketball', 'Running', 'Tennis', 'Swimming'];
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: 'Over $100', value: '100+' }
  ];

  const handleSelectChange = (type, value) => {
    const newFilters = {
      ...filters,
      [type]: value === 'All' ? '' : value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-sidebar bg-white p-6 rounded-lg shadow-md sticky top-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-orange-500 pb-2">Filters</h2>
      
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-gray-700">Category</h3>
        <select
          value={filters.categories || 'All'}
          onChange={(e) => handleSelectChange('categories', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-gray-700">Sport</h3>
        <select
          value={filters.sports || 'All'}
          onChange={(e) => handleSelectChange('sports', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {sports.map(sport => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-gray-700">Price Range</h3>
        <select
          value={filters.priceRange}
          onChange={(e) => handleSelectChange('priceRange', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {priceRanges.map(range => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Optional: Add a clear filters button */}
      <button
        onClick={() => {
          const resetFilters = {
            categories: '',
            sports: '',
            priceRange: 'all'
          };
          setFilters(resetFilters);
          onFilterChange(resetFilters);
        }}
        className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
