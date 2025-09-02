import Carousel from '@/components/carousel';
import ProductSection from '@/components/ProductSection';
import React from 'react';

const Home = () => {
  const images = [
    'https://plus.unsplash.com/premium_photo-1672883551901-caa4758abba7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Our E-Commerce Store</h1>
      <Carousel images={images} />
      <ProductSection/>
    </div>
  );
};

export default Home;
