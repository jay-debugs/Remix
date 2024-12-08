export function NameInput({}) {
  return (
    <div className="h-10 w-[10vw] text-2xl flex gap-5 items-center  mb-10 justify-center ">
      <label htmlFor="name">Name</label>
      <input
        className="h-10 w-[15vw] rounded-lg bg-stone-900 border-none text-white "
        type="text"
        id="name"
        name="name"
      />
    </div>
  );
}
