import React from 'react';
import Header from '../components/Header'; // Importing the Header component
import './globals.css'; 

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Render the Header */}
        <main>{children}</main> {/* Main content of the pages */}
      </body>
    </html>
  );
};

export default RootLayout;
