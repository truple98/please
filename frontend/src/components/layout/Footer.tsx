import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} 도시밖 지방 체험. All rights reserved.
      </div>
    </footer>
  );
} 