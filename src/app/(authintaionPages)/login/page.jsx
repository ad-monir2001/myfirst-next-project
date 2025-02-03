'use client'
import React from 'react'

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 flex flex-col">
      {/* Header with Travel Theme */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-center">
          {/* <Camera className="text-emerald-600 h-12 w-12" /> */}
        </div>
        <h1 className="text-3xl font-bold text-center text-emerald-800">Safrz</h1>
        <p className="text-center text-emerald-600">Your smart travel companion</p>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6 py-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-emerald-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-emerald-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700">
            Sign In
          </button>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="bg-white px-4 text-sm text-gray-500">or continue with</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <img src="/api/placeholder/24/24" alt="Google" className="w-6 h-6" />
              <span className="text-gray-700">Continue with Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <img src="/api/placeholder/24/24" alt="X" className="w-6 h-6" />
              <span className="text-gray-700">Continue with X</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
