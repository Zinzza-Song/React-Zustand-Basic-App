import { useEffect } from "react";
import Coutner from "./components/Coutner";
import TodoList from "./components/TodoList";
import { useUserStore } from "./store/useUserStore";
import "./App.css";

function App() {
  const { fetch, user } = useUserStore();

  console.log("user", user);
  useEffect(() => {
    fetch(1);
  }, [fetch]);

  return (
    <div className="App">
      <header className="App-header">
        <Coutner />
        <TodoList />
        <p style={{ color: "white", fontWeight: "bold" }}>{user.name}</p>
        <p style={{ color: "white", fontWeight: "bold" }}>{user.phone}</p>
      </header>
    </div>
  );
}

export default App;
