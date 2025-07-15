import AppHead from "./components/AppHead.jsx";
import AppInput from "./components/AppInput.jsx";
import AppContent from "./components/AppContent.jsx";
import "./App.css";

function App() {
  return (
    <center className="todo-Container">
      <AppHead />
      <AppInput />
      <AppContent todoName={"4/10/23"} todoDate={"Buy Milk "} />
    </center>
  );
}

export default App;
