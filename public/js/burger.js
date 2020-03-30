$(function() {
  console.log("you're in a burger")
  // Add a new burger.
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger")
        .val()
        .trim(),
      devoured: 0
    };
    console.log("--------")
  console.log(newBurger)
  console.log("-------------------")
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Added new burger");
      // Reload the page to get the updated burger list.
      location.reload();
    });
  });

  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger devoured");
        location.reload();
      });
  });

  $(".trashburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });
});
