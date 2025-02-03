import React from 'react'
import { Camera, FileText, BarChart2, FileCheck, BookOpen } from 'lucide-react';
export default function userDashBoard() {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Header */}
      <div className="bg-emerald-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Adil</h1>
            <p className="text-emerald-100">Your documents hub</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
            <span className="text-lg font-medium">JS</span>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="p-6 grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
            <Camera className="text-emerald-600 h-6 w-6" />
          </div>
          <h2 className="font-semibold text-gray-800">Capture Passport</h2>
          <p className="text-sm text-gray-600">Scan your passport securely</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
            <BookOpen className="text-emerald-600 h-6 w-6" />
          </div>
          <h2 className="font-semibold text-gray-800">View Documents</h2>
          <p className="text-sm text-gray-600">Access your stored documents</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
            <FileText className="text-emerald-600 h-6 w-6" />
          </div>
          <h2 className="font-semibold text-gray-800">Apply for Visa</h2>
          <p className="text-sm text-gray-600">Start visa application</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
          <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
            <FileCheck className="text-emerald-600 h-6 w-6" />
          </div>
          <h2 className="font-semibold text-gray-800">Tickets</h2>
          <p className="text-sm text-gray-600">View travel tickets</p>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Travel Analytics</h2>
            <BarChart2 className="text-emerald-600 h-6 w-6" />
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Documents Stored</span>
                <span className="font-medium text-gray-800">12</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full">
                <div className="h-2 bg-emerald-500 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Pending Applications</span>
                <span className="font-medium text-gray-800">2</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full">
                <div className="h-2 bg-emerald-500 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
