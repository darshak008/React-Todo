import InputField from "./Components/InputField";
import Headings from "./Components/Headings";
import TodoContainer from "./Components/TodoContainer";
import Tags from "./Components/Tags";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <>
      <div className="flex gap-20 justify-center items-center bg-linear-to-br from-gray-900 via-purple-900 to-violet-800 text-slate-50 h-screen">
        <TodoContainer>
          <Headings tag="Add New Task" />
          <InputField />
        </TodoContainer>
        <TodoContainer>
          <Headings tag="What To Do?" />
          <Tags tag="Sample Tag" />
          <Tasks />
        </TodoContainer>
      </div>
    </>
  );
}

export default App;
