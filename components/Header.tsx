"use client";
import { twMerge } from "tailwind-merge";

import { useRouter } from "next/navigation";

interface Headerprops {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<Headerprops> = ({ children, className }) => {
    const router = useRouter();
  return (
    <div
    className={twMerge(`
      h-fit 
      bg-gradient-to-b 
      from-indigo-800 
      p-6
      `,
      className
    )}>
       

  </div>
  );
};
export default Header;
