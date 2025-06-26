import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8 mt-12">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} 도시밖 지방 체험. All rights reserved.
      </div>
    </footer>
  );
} 