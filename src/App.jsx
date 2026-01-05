import "./App.css";
import { Tasks } from "./pages/tasks";

function App() {
  console.log("app");
  
  return (
    <div>
      <main className="main-content">
        <Tasks/>
      </main>
    </div>
  );
}

export default App;
