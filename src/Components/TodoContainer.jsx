export default function TodoContainer({ children }) {
  return (
    <div className="w-[38%] h-[80%] bg-gray-600/30 border border-white/30 rounded-lg flex flex-col px-10 items-center">
      {children}
    </div>
  );
}
