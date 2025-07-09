import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  return (
    <>
      <h1>Food Items</h1>
      <ul class="list-group">
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
