'use client';
import React from 'react';
import Link from 'next/link'; 
import { Button } from '@/components/ui/button';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">My E-Commerce</Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/product">
          <Button variant="link" color="light" className="text-white hover:text-gray-400">
            All Products
          </Button>
        </Link>
        <Link href="/orders">
          <Button variant="link" color="light" className="text-white hover:text-gray-400">
            Orders
          </Button>
        </Link>
        <Link href="/cart">
        <div className="relative">
          <Button variant="link" color="light" className="text-white hover:text-gray-400">
            Cart
          </Button>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs px-2 py-1 bg-red-500 text-white rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </Link>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button variant="link" color="light" className="text-white hover:text-gray-400">
              User
            </Button>
          </DropdownMenu.Trigger>
          
          <DropdownMenu.Content className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <DropdownMenu.Item>
              <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Login
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign Out
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default Header;
