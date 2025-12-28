import InputField from "./Components/InputField";
import Tags from "./Components/Tags";
import TodoContainer from "./Components/TodoContainer";

function App() {
  return (
    <>
      <div className="flex gap-20 justify-center items-center bg-linear-to-br from-gray-900 via-purple-900 to-violet-800 text-slate-50 h-screen">
        <TodoContainer>
          <Tags tag="Add New Task" />
          <InputField />
        </TodoContainer>
        <TodoContainer>
          <Tags tag="What To Do?" />
        </TodoContainer>
      </div>
    </>
  );
}

export default App;
