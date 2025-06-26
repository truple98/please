import React from 'react';
import { cn } from '@/utils/cn';

export function Divider({ className = '' }: { className?: string }) {
  return <hr className={cn('border-t border-gray-200 my-4', className)} />;
} 