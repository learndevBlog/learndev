import React, { ReactNode } from 'react';

const TextWrapOnLine = ({ 
    children, 
    wrapOnLine,
    className
}: {
    children: ReactNode, 
    wrapOnLine: number,
    className?: string
}) => (
  <div
    className={`
      overflow-hidden 
      overflow-ellipsis 
      whitespace-normal 
      block
      ${className}
    `}
    style={{
      display: '-webkit-box',
      WebkitLineClamp: wrapOnLine,
      WebkitBoxOrient: 'vertical'
    }}
  >
    {children}
  </div>
);

export default TextWrapOnLine;
