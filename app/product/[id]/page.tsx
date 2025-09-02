'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // useParams is for dynamic routing

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch product details from the Fake Store API based on the ID
  useEffect(() => {
    if (!id) return; // Ensure `id` exists before making the API request

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch the product when `id` changes

  if (loading) {
    return <div className="text-center">Loading product...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 w-full">
      <div className="flex flex-col md:flex-row items-center">
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-96 object-cover" />
        <div className="md:ml-8">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-lg mb-4">{product.description}</p>
          <span className="font-semibold text-xl text-green-600">${product.price}</span>
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
