import React from 'react';
import { cn } from '@/utils/cn';

export function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('py-8 px-4 md:px-8', className)}>{children}</section>;
} 