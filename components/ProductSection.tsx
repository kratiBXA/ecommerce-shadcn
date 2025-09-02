'use client'; // Ensure this is a client-side component

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetching products from the Fake Store API using fetch
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        // Check if response is OK (status 200-299)
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
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold my-8 text-center">All Products</h2>

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

export default ProductSection;
