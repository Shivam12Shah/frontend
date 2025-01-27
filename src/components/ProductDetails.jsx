import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleWishlist } from '../redux/features/shopSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.shop.wishlist);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock product data - replace with actual API call
  const product = {
    id,
    name: 'Professional Sports Shoe',
    price: 129.99,
    description: 'High-performance sports shoe designed for professional athletes.',
    images: ['/images/product1.jpg', '/images/product1-2.jpg', '/images/product1-3.jpg'],
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black', 'White', 'Red'],
    specifications: [
      'Breathable mesh upper',
      'Cushioned midsole',
      'Durable rubber outsole',
      'Lightweight design'
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }

    const productToAdd = {
      id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity
    };

    dispatch(addToCart(productToAdd));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="product-images">
          <Swiper
            modules={[Navigation, Thumbs]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            className="mb-4"
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-[500px] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`border rounded-md px-4 py-2 ${
                    selectedSize === size ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-500'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Color</h3>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  className={`border rounded-md px-4 py-2 ${
                    selectedColor === color ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-500'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 border rounded"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border rounded px-2 py-1"
              />
              <button
                className="px-3 py-1 border rounded"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-6"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          {/* Specifications */}
          <div>
            <h3 className="font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-gray-600">
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
