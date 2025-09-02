'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard'; // Assuming ProductCard is in components

const AllProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      {loading ? (
        <div className="text-center text-lg">Loading products...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
