'use client';

import { useState, useEffect } from 'react';

type StickyHeaderProps = {
  className?: string;
  offset?: number;
};

export default function StickyHeader({
  offset = 2,
  className,
  children,
}: React.PropsWithChildren<StickyHeaderProps>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offset) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  // Define base classes and conditional class for scroll offset
  const baseClasses = 'sticky top-0 z-[9999] flex items-center bg-gray-0/80 p-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6';
  const scrollClasses = isScrolled ? 'card-shadow' : '';

  // Combine all the classes
  const finalClassName = `${baseClasses} ${scrollClasses} ${className || ''}`.trim();

  return (
    <header className={finalClassName}>
      {children}
    </header>
  );
}
