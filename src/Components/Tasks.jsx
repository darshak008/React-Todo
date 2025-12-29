import { Check } from "lucide-react";

export default function Tasks() {
  return (
    <div className="w-full h-full pt-10">
      <div className="w-full h-14 p-4 mt border border-white/30 rounded-xl">
        {/* <input
          type="checkbox"
          className="size-5 appearance-none border border-white/30 rounded-md checked:bg-green-500 cursor-pointer"
        /> */}
        <input
          type="checkbox"
          className="peer appearance-none w-5 h-5 border-2 border-white/30 rounded bg-white/10 checked:bg-green-500 cursor-pointer "
        />
        <Check
          className="-mt-6 ml-0.5 w-4 h-4 text-white pointer-events-none hidden peer-checked:block"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}
