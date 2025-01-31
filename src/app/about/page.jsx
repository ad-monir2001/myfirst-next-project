'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="font-semibold text-center text-4xl my-3 py-4">
        About Page
      </h1>
      <button
        onClick={() => router.push('/')}
        className="border p-2 rounded-lg font-semibold text-lg"
      >
        Back to the Home
      </button>
    </div>
  );
};

export default AboutPage;
