import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleWishlist } from '../redux/features/shopSlice';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import testtin from "../assets/footbal.jpg"

const ProductList = ({ filters = { categories: 'all', sports: 'all', priceRange: 'all' }, featured = false }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.shop.wishlist);

  // Mock products data with more items
  const products = [
    {
      id: 1,
      name: 'Professional Running Shoes',
      price: 99.99,
      category: 'Footwear',
      sport: 'Running',
      image: testtin,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Basketball Jersey',
      price: 49.99,
      category: 'Clothing',
      sport: 'Basketball',
      image: testtin
    },
    {
      id: 3,
      name: 'Tennis Racket Pro',
      price: 159.99,
      category: 'Equipment',
      sport: 'Tennis',
      image: testtin
    },
    {
      id: 4,
      name: 'Football Cleats',
      price: 89.99,
      category: 'Footwear',
      sport: 'Football',
      image: testtin
    },
    {
      id: 5,
      name: 'Swimming Goggles',
      price: 29.99,
      category: 'Accessories',
      sport: 'Swimming',
      image: testtin
    },
    {
      id: 6,
      name: 'Training Shorts',
      price: 34.99,
      category: 'Clothing',
      sport: 'Running',
      image: testtin
    }
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Check if filters are empty or have default values
    if (filters.categories.length === 0 && filters.sports.length === 0 && filters.priceRange === 'all') {
      return true; // Show all products
    }
    if (filters.categories && product.category !== filters.categories) {
      return false;
    }
    if (filters.sports && product.sport !== filters.sports) {
      return false;
    }
    if (filters.priceRange && filters.priceRange !== 'all') {
      if (filters.priceRange === '0-50') {
        if (product.price >= 50) return false;
      } else if (filters.priceRange === '50-100') {
        if (product.price < 50 || product.price >= 100) return false;
      } else if (filters.priceRange === '100+') {
        if (product.price < 100) return false;
      }
    }
    return true;
  });

  const displayProducts = featured ? filteredProducts.slice(0, 5) : filteredProducts;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {displayProducts.map(product => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative group">
            <Link to={`/product/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <button
              onClick={() => dispatch(toggleWishlist(product.id))}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
            >
              {wishlist.includes(product.id) ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-gray-600 text-xl" />
              )}
            </button>
            {/* Quick add to cart overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  quantity: 1
                }))}
                className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-colors duration-300"
              >
                <FaShoppingCart />
                Quick Add
              </motion.button>
            </div>
          </div>

          <div className="p-4">
            <Link to={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-colors duration-300">
                {product.name}
              </h3>
            </Link>
            
            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(product.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <p className="text-orange-500 font-bold text-lg">${product.price}</p>
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {product.category}
                </span>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                  {product.sport}
                </span>
              </div>
            </div>

            <button 
              onClick={() => dispatch(addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
              }))}
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
