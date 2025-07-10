import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  //let foodItems = []; // Uncomment this line to test the empty state

  return (
    <>
    {/* Testing map method */}
    
      <h1>Food Items</h1>
      {foodItems.length === 0 ? <h3>I am still hingry. No food Items</h3> : null}
      <ul class="list-group">
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">{item}</li>
        ))}
      </ul>




    </>
  );
}

export default App;
