import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  children: ReactNode;
  htmlfor: string;
  className?: string;
}

export const Input = ({ children , htmlfor , className}:InputProps) => {
  return (
    <div className={twMerge(`h-10 w-[10vw] text-2xl grid gap-5 items-center text-center p-2 mb-16 justify-center ${className}`)}>
      <label htmlFor={htmlfor}>{children}</label>
      <input
        className=" pl-2 h-10 w-[15vw] rounded-lg drop-shadow-2xl bg-stone-900 border-none text-white "
        type="text"
        id={htmlfor}
        name={htmlfor}
        placeholder="Enter your details" 
      />
    </div>
  );
};
