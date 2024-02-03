import React from 'react';
import cn from 'classnames';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn('max-w-[90%] w-5xl m-auto bg-white rounded-3xl', className)}
    >
      {children}
    </div>
  );
}

export default Container;
