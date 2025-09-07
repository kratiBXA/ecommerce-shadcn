// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext'; // ✅ import provider
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />           {/* ✅ Now inside CartProvider */}
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
