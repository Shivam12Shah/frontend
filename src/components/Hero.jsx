import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import firstimage from "../assets/04c4672751db7f7649d3e36a27638a79.jpg"
import sportsware from "../assets/sportsware.jpg"
import runnig from "../assets/running.jpg"
import tannis from "../assets/tannis.jpg"
import basketball from "../assets/baskball.jpg"
import football from "../assets/footbal.jpg"

const Hero = () => {
  const slides = [
    {
      image: firstimage,
      title: 'Premium Sports Gear',
      description: 'Discover the latest in sports technology and fashion',
      cta: 'Shop Now',
      link: '/products'
    },
    {
      image: sportsware,
      title: 'Performance Wear',
      description: 'Engineered for athletes, designed for everyone',
      cta: 'Explore Collection',
      link: '/products?category=clothing'
    }
  ];

  const featuredCategories = [
    { name: 'Running', image: runnig, link: '/products?sport=running' },
    { name: 'Basketball', image: basketball, link: '/products?sport=basketball' },
    { name: 'Football', image: football, link: '/products?sport=football' },
    { name: 'Tennis', image: tannis, link: '/products?sport=tennis' }
  ];

  const benefits = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'On orders over $100'
    },
    {
      icon: '↩️',
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: '🏆',
      title: 'Quality Guarantee',
      description: 'Authentic products'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Expert assistance'
    }
  ];

  return (
    <div className="hero-section">
      {/* Main Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="text-white max-w-xl">
                    <h1 className="text-6xl font-bold mb-6">{slide.title}</h1>
                    <p className="text-xl mb-8 text-gray-200">{slide.description}</p>
                    <Link 
                      to={slide.link}
                      className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Benefits Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-3xl">{benefit.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop By Sport
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {featuredCategories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-bold p-6 w-full text-center">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
          <p className="text-xl mb-6">Get 20% off on your first purchase</p>
          <p className="text-2xl font-bold mb-6">Use code: FIRST20</p>
          <Link 
            to="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Newsletter Signup */}
      
    </div>
  );
};

export default Hero;
