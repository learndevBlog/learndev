import React, { ReactNode } from 'react';
import { contentContainerVariants } from './variants';



interface cardProps {
  banner?: string
  children: ReactNode
}

export const Card: React.FC<cardProps> = ({
    banner,
    children
}) => {
  return (
    <div className='max-w-[380px] w-full border rounded-lg hover:border-primary-pure h-fit hover:shadow-level3'>
        {banner && <div className="bg-no-repeat bg-center bg-cover w-full h-[180px] rounded-t-lg"  style={{ backgroundImage: `url(${banner})` }}></div>}
        <div className={`rounded-lg p-xxs bg-neutral-high-pure h-full`}>
           {children}
        </div>
    </div>
  );
};
