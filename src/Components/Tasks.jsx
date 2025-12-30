import { Check } from "lucide-react";

export default function Tasks() {
  return (
    <div className="w-full h-full pt-10">
      <div className="w-full h-14 p-4 mb-5 border border-white/30 rounded-xl flex items-center relative justify-between">
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 border-2 border-white/30 rounded bg-white/10 checked:bg-green-500 cursor-pointer "
        />
        <Check
          className="absolute ml-[1.5px] w-4 h-4 text-white pointer-events-none hidden peer-checked:inline"
          strokeWidth={3}
        />

        <p className="text-lg">This is the task.</p>
        <button className="bg-red-500 px-3 py-1 rounded text-center border border-white/50 hover:bg-red-400 duration-300 cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
}
