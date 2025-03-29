import "react";
import "./App.css";
import Coutner from "./components/Coutner";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Coutner />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
