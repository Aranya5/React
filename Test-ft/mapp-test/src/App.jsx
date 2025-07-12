import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClothItems from "./components/ClothItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  //let foodItems = []; // Uncomment this line to test the empty state

  let clothingItems = ["T-shirt", "Jeans", "Jacket", "Sweater", "Shorts", "Hat"];

  return (
    <>
    {/* Testing map method */}
  
    
      <h1>Food Items</h1>
      {foodItems.length === 0 ? <h3>I am still hungry. No food Items</h3> : null}
      <ul class="list-group">
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">{item}</li>
        ))}
      </ul>

      {/* Testing Prop method */}

      <h1>Clothing</h1>
      <ErrorMessage itemArr={clothingItems}></ErrorMessage>
      <ClothItems itemArr={clothingItems}></ClothItems>

    </>
  );
}

export default App;
