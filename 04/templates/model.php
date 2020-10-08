<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="POST" action="includes/form-handler.php">
          <input type="hidden" name="id" id="id">
          <div class="form-group">
            <label for="emp-name" class="col-form-label">Employee Name:</label>
            <input type="text" class="form-control" name="name" id="name">
            <small id="err_name" class="text-danger"></small>
          </div>
          <div class="form-group">
            <label for="emp-address" class="col-form-label">Employee Address:</label>
            <input type="text" class="form-control" name="address" id="address">
            <small id="err_address" class="text-danger"></small>
          </div>
          <div class="form-group">
            <label for="emp-sal" class="col-form-label">Employee Salary:</label>
            <input type="text" class="form-control" name="salary" id="salary">
            <small id="err_salary" class="text-danger"></small>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      </form>

    </div>
  </div>
</div>