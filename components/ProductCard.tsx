import React from 'react';
import Link from 'next/link'; 

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, image, description, price }) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <p className="text-gray-700 text-sm truncate">{description}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="font-bold text-xl text-green-600">${price}</span>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
