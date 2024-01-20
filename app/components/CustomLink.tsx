import React from "react";
import Link from "next/link";

export const CustomLink = ({ children, href, classname, onClick }: { 
        children: React.ReactNode, 
        href: string, 
        classname?: string 
        onClick?: (event: any) => void
    }) => {

        return (
            <Link onClick={onClick} className={`text-decoration-none text-black ${classname}`} href={href}>
                {children}
            </Link>
        );
    }
;