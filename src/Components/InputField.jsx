export default function InputField() {
  return (
    <div className="w-full mt-10">
      <label htmlFor="Title" className="block text-xl ml-1">
        Task Title
      </label>
      <input
        id="Title"
        type="text"
        placeholder="Enter task title"
        className="bg-transparent border border-white/30 rounded-lg p-4 w-full h-15 mt-4 text-white text-lg focus:outline-none focus:border-white/80 mb-10"
      />
      <label htmlFor="Description" className="block text-xl ml-1">
        Task Description
      </label>
      <textarea
        id="Description"
        type="text"
        placeholder="Enter task description"
        className="bg-transparent border border-white/30 rounded-lg p-4 w-full h-50 mt-4 text-white text-lg focus:outline-none focus:border-white/80 mb-10 resize-none"
      />
      <button className="w-full h-15 rounded-lg bg-blue-700 hover:bg-blue-600 duration-300 cursor-pointer text-lg">
        Add to queue
      </button>
    </div>
  );
}
