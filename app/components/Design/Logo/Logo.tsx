import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { LOGO_DIMENSIONS, LOGO_ICON } from "@/app/contants/logo";


interface LogoProps {
  mode: 'dark' | 'light';
  labeled: 'none' | 'h' | 'v';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  mode = 'dark',
  labeled = 'none',
  className
}) => {
  const logo_sm = LOGO_ICON[mode]['sm'][labeled];
  const logo_md = LOGO_ICON[mode]['md'][labeled];
  const logo_lg = LOGO_ICON[mode]['lg'][labeled];

  const dimensions_sm = LOGO_DIMENSIONS.sm[labeled];
  const dimensions_md = LOGO_DIMENSIONS.md[labeled];
  const dimensions_lg = LOGO_DIMENSIONS.lg[labeled];

  return (
    <div className={`${className}`}>
      <Link href='/'>
        <div className="block md:hidden">
          <Image src={logo_sm} alt="Logo" width={dimensions_sm.width} height={dimensions_sm.height} />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image src={logo_md} alt="Logo" width={dimensions_md.width} height={dimensions_md.height} />
        </div>
        <div className="hidden lg:block">
          <Image src={logo_lg} alt="Logo" width={dimensions_lg.width} height={dimensions_lg.height} />
        </div>
      </Link>
    </div>
  );
};
