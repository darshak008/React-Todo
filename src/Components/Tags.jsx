export default function Tags() {
  return (
    <>
      <div className="w-full h-15 mt-4 flex justify-around items-center">
        <p className="text-sm text-center w-30 p-2 font-bold border border-white/30 duration-300 hover:bg-white/10 cursor-pointer rounded-lg">
          All tasks
        </p>
        <p className="text-sm text-center w-30 p-2 font-bold border border-white/30 duration-300 hover:bg-white/10 cursor-pointer rounded-lg">
          Pending
        </p>
        <p className="text-sm text-center w-30 p-2 font-bold border border-white/30 duration-300 hover:bg-white/10 cursor-pointer rounded-lg">
          Completed
        </p>
      </div>
    </>
  );
}
