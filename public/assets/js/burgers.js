var i = 0;
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newBurgerMeal = $(this).data("newburger");

    var newSandwhich = {
      devoured: newBurgerMeal
    };
   
     
    //var addMe = newSandwhich + newSandwhich
    if(newBurgerMeal === true){
       i ++;
      
     
       
      
      document.getElementById("id").innerText = "I have eaten " + i +   " burgers!"  ;
   
      
  }else{
  }
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newSandwhich
    }).then(
      function() {
        console.log("changed burger to", newBurgerMeal);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var devoured = 0;
    var newBurgerMade = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=deluxe]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgerMade
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
