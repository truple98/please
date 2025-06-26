import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          도시밖 지방 체험
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/experience" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">체험</Link>
          <Link href="/chatbot" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">챗봇</Link>
          <Link href="/mypage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">마이페이지</Link>
        </nav>
      </div>
    </header>
  );
} 