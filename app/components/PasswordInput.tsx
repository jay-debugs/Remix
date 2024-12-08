import React from "react";

export const PasswordInput = () => {
  return (
    <div className="h-10 w-[10vw] text-2xl flex gap-5 items-center  mb-10 justify-center ">
      <label htmlFor="Password">Password</label>
      <input
        className="h-10 w-[15vw] rounded-lg bg-stone-900 border-none text-white "
        type="text"
        id="Password"
        name="Password"
      />
    </div>
  );
};
