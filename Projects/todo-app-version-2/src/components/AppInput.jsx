function AppInput() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo task Here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppInput;
