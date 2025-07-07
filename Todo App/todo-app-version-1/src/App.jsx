import AppHead from "./components/AppHead.jsx";
import AppInput from "./components/AppInput.jsx";
import AppContent1 from "./components/AppContent1.jsx";
import AppContent2 from "./components/AppContent2.jsx";
import "./App.css";

function App() {
  return (
    <center className="todo-Container">
      <AppHead />
      <AppInput />
      <AppContent1 />
      <AppContent2 />
    </center>
  );
}

export default App;
