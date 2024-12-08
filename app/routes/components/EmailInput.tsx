
export function EmailInput({}) {
  return <div className="h-10 w-[10vw] text-2xl flex gap-5 items-center  mb-10 justify-center ">
      <label htmlFor="email">Email</label>
      <input className="h-10 w-[15vw] rounded-lg bg-stone-900 border-none text-white " type="email" id="email" name="email" />
    </div>;
}
  