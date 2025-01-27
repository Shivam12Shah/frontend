import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems = useSelector(state => state.shop.cart)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">SportShop</Link>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="flex items-center relative">
              <span className="material-icons">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="px-4 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-900">Login</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 