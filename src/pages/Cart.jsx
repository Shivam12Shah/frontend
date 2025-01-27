import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/features/shopSlice';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const cartItems = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, quantity: Math.max(1, newQuantity) }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        <span className="border-b-4 border-orange-500 pb-2">Your Shopping Cart</span>
      </h1>

      {cartItems.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/products')}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-lg shadow-md p-6 mb-4 transform transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-6">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                      <p className="text-orange-500 font-bold text-xl mb-2">${item.price}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            -
                          </motion.button>
                          <span className="px-4 py-2 border-x">{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            +
                          </motion.button>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          Remove
                        </motion.button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-orange-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Cart Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-orange-500">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-orange-500">${calculateTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-orange-500">
                    {Number(calculateTotal()) > 100 ? 'Free' : '$10.00'}
                  </span>
                </div>
                <div className="flex justify-between pt-4 border-t border-orange-200">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-orange-500">
                    ${Number(calculateTotal()) > 100 
                      ? calculateTotal() 
                      : (Number(calculateTotal()) + 10).toFixed(2)}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/checkout')}
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 transform"
              >
                Proceed to Checkout
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/products')}
                className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 transform"
              >
                Continue Shopping
              </motion.button>

              {/* Free Shipping Notice */}
              <div className="mt-6 text-center text-sm text-gray-600">
                {Number(calculateTotal()) < 100 && (
                  <p>Add ${(100 - Number(calculateTotal())).toFixed(2)} more for <span className="text-orange-500 font-semibold">Free Shipping!</span></p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
