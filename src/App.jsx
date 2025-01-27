import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
import FilterSidebar from './components/FilterSidebar'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import AboutUs from './components/AboutUs'
import ContactUs from './pages/ContactUs'
import Categories from './pages/Categories'

const App = () => {
  const [homeFilters, setHomeFilters] = useState({
    categories: [],
    sports: [],
    priceRange: 'all'
  })

  const handleHomeFilterChange = (newFilters) => {
    setHomeFilters(newFilters)
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="container mx-auto px-4 py-12">
                <section className="all-products">
                  <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    <span className="border-b-4 border-orange-500 pb-2">All Products</span>
                  </h2>
                  <div className="flex gap-8">
                    <div className="w-1/4">
                      <FilterSidebar onFilterChange={handleHomeFilterChange} />
                    </div>
                    <div className="w-3/4">
                      <ProductList filters={homeFilters} />
                    </div>
                  </div>
                </section>
              </div>
            </>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
