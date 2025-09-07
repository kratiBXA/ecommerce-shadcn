'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_email');

    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2">You have been signed out</h2>
        <p className="text-gray-500">Redirecting to homepage...</p>
      </div>
    </div>
  );
};

export default LogoutPage;
