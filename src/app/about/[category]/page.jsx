'use client'
import { useParams } from 'next/navigation';
import React from 'react';

export default function CategoryDetails() {
    const params = useParams()
  return (
    
    <div>
      <h1 className="font-semibold text-3xl text-center"> Category Details</h1>
      <p>
        Category: {params.category}
      </p>
    </div>
  );
}
