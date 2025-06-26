import * as React from 'react';
import { cn } from '@/utils/cn';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Avatar({ src, alt, className, fallback, ...props }: AvatarProps) {
  return (
    <img
      src={src || fallback}
      alt={alt || '아바타'}
      className={cn('w-10 h-10 rounded-full object-cover bg-gray-200', className)}
      {...props}
    />
  );
} 