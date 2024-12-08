import { ReactNode } from "react";

interface InputProps {
  children: ReactNode;
  htmlfor: string;
}

export const Input = ({ children , htmlfor}:InputProps) => {
  return (
    <div className="h-10 w-[10vw] text-2xl grid gap-5 items-center text-center  mb-32 justify-center ">
      <label htmlFor={htmlfor}>{children}</label>
      <input
        className="h-10 w-[15vw] rounded-lg bg-stone-900 border-none text-white "
        type="text"
        id={htmlfor}
        name={htmlfor}
      />
    </div>
  );
};
