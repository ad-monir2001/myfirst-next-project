import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* Side Nav */}
        <div className="col-span-3 border-r-2 min-h-screen">
          <ul>
            <li>user list</li>
          </ul>
        </div>
        {/* Dashboard content */}
        <div className="col-span-9 ml-3">{children}</div>
      </div>
    </div>
  );
}
