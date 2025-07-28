import cn from 'classnames';
import type React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('m-auto w-5xl max-w-[90%] rounded-3xl bg-white', className)}>{children}</div>
  );
}

export default Container;
