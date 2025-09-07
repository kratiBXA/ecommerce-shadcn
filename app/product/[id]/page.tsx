'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from '@/context/CartContext'; // ✅ import cart context

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // ✅ get addToCart from context

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!id) return;

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
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: product.id.toString(), // convert id to string for consistency
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  };

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
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-96 object-contain" />
        <div className="md:ml-8">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-lg mb-4">{product.description}</p>
          <span className="font-semibold text-xl text-green-600">${product.price}</span>
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
