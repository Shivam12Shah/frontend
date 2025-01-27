import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Clothing', link: '/category/clothing' },
    { name: 'Footwear', link: '/category/footwear' },
    { name: 'Equipment', link: '/category/equipment' },
    { name: 'Accessories', link: '/category/accessories' },
  ];

  return (
    <div className="categories container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link key={index} to={category.link} className="block bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories; 