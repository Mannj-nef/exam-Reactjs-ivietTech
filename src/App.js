import Form from "./components/form/Form";
import Todo from "./components/todo/Todo";
import { useSelector } from "react-redux";

function App() {
  const taskItem = useSelector((state) => state.taskReducer.taskItem);

  return (
    <div className="App">
      <Todo>
        <Form taskItem={taskItem}></Form>
      </Todo>
    </div>
  );
}

export default App;
