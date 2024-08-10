import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { LOGO_DIMENSIONS, LOGO_ICON } from "@/app/contants/logo";


interface LogoProps {
  mode: 'dark' | 'light';
  labeled: 'none' | 'h' | 'v';
  className?: string;
  size: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  mode = 'dark',
  labeled = 'none',
  size = 'sm',
  className
}) => {
  const logo = LOGO_ICON[mode][size][labeled];

  const dimension = LOGO_DIMENSIONS[size][labeled];

  return (
    <div className={`${className}`}>
      <Link href='/'>
        <div>
          <Image src={logo} alt="Logo" width={dimension.width} height={dimension.height} />
        </div>
      </Link>
    </div>
  );
};
