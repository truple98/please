import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

export function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-40">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold text-primary">
          도시밖 지방 체험
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/experience" className={cn('hover:text-primary font-medium')}>체험</Link>
          <Link href="/chatbot" className={cn('hover:text-primary font-medium')}>챗봇</Link>
          <Link href="/mypage" className={cn('hover:text-primary font-medium')}>마이페이지</Link>
        </nav>
      </div>
    </header>
  );
} 