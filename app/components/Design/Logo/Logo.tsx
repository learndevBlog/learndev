import React from "react";
import Link from "next/link";
import Image from 'next/image';

// Definição das dimensões para cada combinação
const LOGO_DIMENSIONS = {
  sm: {
    none: { width: 24, height: 24 },
    h: { width: 106.43, height: 24 },
    v: { width: 23, height: 43.47 },
  },
  md: {
    none: { width: 32, height: 32 },
    h: { width: 141.91, height: 32 },
    v: { width: 32, height: 57.96 },
  },
  lg: {
    none: { width: 48, height: 48 },
    h: { width: 212.86, height: 48 },
    v: { width: 48, height: 86.94 },
  },
};

const LOGO_ICON = {
  dark: {
    sm: {
      none: '/icons/logo/dark/pure/logo-dark-pure-sm.svg',
      h: '/icons/logo/dark/labeled_horizontally/logo-labeled-h-dark-sm.svg',
      v: '/icons/logo/dark/labeled_vertically/logo-labeled-v-dark-sm.svg',
    },
    md: {
      none: '/icons/logo/dark/pure/logo-dark-pure-md.svg',
      h: '/icons/logo/dark/labeled_horizontally/logo-labeled-h-dark-md.svg',
      v: '/icons/logo/dark/labeled_vertically/logo-labeled-v-dark-md.svg',
    },
    lg: {
      none: '/icons/logo/dark/pure/logo-dark-pure-lg.svg',
      h: '/icons/logo/dark/labeled_horizontally/logo-labeled-h-dark-lg.svg',
      v: '/icons/logo/dark/labeled_vertically/logo-labeled-v-dark-lg.svg',
    },
  },
  light: {
    sm: {
      none: '/icons/logo/light/pure/logo-light-pure-sm.svg',
      h: '/icons/logo/light/labeled_horizontally/logo-labeled-h-light-sm.svg',
      v: '/icons/logo/light/labeled_vertically/logo-labeled-v-light-sm.svg',
    },
    md: {
      none: '/icons/logo/light/pure/logo-light-pure-md.svg',
      h: '/icons/logo/light/labeled_horizontally/logo-labeled-h-light-md.svg',
      v: '/icons/logo/light/labeled_vertically/logo-labeled-v-light-md.svg',
    },
    lg: {
      none: '/icons/logo/light/pure/logo-light-pure-lg.svg',
      h: '/icons/logo/light/labeled_horizontally/logo-labeled-h-light-lg.svg',
      v: '/icons/logo/light/labeled_vertically/logo-labeled-v-light-lg.svg',
    },
  },
};

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
