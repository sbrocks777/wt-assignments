<?php include "templates/header.php"; ?>
<div class="container shadow p-3 mb-5 bg-white rounded">
  <div class="d-flex mt-5 justify-content-between align-items-center">
    <h2 class="">Employee Details</h2>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="Create new employee">Add new employee</button>
    <!-- <button class="btn btn-primary float-right d-inline">Add new employee</button> -->
  </div>
  <hr>
  <?php include 'templates/model.php' ?>
  <?php
  require_once 'includes/config.php';
  $sql = "SELECT * from employees";
  if ($result = mysqli_query($conn, $sql)) {
    echo
      "<table class='table table-bordered table-striped table-sm'> 
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Address</th>
            <th scope='col'>Salary</th>
          </tr>
        </thead>
        <tbody>";
    if (mysqli_num_rows($result) > 0) {
      while ($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<th scope='row'>" . $row['id'] . "</th>";
        echo "<td>" . $row['emp_name'] . "</td>";
        echo "<td>" . $row['emp_address'] . "</td>";
        echo "<td>" . $row['emp_sal'] . "</td>";
      }
    }
  }

  echo "</tr>
  </tbody>
</table>";

  mysqli_close($conn);
  ?>
</div>
<?php include "templates/footer.php"; ?>