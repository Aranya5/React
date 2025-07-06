function AppContent2() {
  let todo = "Go to College";
  let date = "4/10/2023";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{todo}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppContent2;
