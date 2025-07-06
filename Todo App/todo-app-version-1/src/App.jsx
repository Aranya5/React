function App() {
  return (
    <div>
      <div className="appHeader">
        <center>
          <h1>Todo React App</h1>
        </center>
      </div>

      <div className="appInput">
        <div class="container text-center">
          {/* First row */}
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter Todo Here"></input>
            </div>
            <div class="col-4">
              <input type="date"></input>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">
                Add
              </button>
            </div>
          </div>
          {/* Second row */}
          <div class="row">
            <div class="col-6">
              Buy Milk
            </div>
            <div class="col-4">
              4/10/2023
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
          {/* Third row */}
          <div class="row">
            <div class="col-6">
              Go to College
            </div>
            <div class="col-4">
              4/10/2023
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
