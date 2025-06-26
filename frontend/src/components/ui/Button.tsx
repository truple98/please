import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform active:scale-95';
    
    const variantClasses = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
      secondary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg',
      outline: 'border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:border-blue-700',
      ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
      destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg',
    };
    
    const sizeClasses = {
      default: 'h-11 py-3 px-6 text-sm',
      sm: 'h-9 px-4 text-sm',
      lg: 'h-14 px-8 text-base',
      icon: 'h-11 w-11',
    };
    
    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button }; 