$(document).ready(function() {

    // When the user insert the new topic, the new topic will be added to the room list.
    $("#add-topic").click(function() {

        // Append the user input to the room options.
        $("#room").append('<option value="' + $("#new-topic").val() + '">' + $("#new-topic").val() + '</option>');
        $("#new-topic").val("");
    });

    // When user clicks add-btn
    $("#join-btn").on("click", function() {

        // Make a newUser object
        let newUser = {
            username: $("#username").val().trim(),
            topic: $("#room").val().trim(),
        };

        console.log(newUser);

        // Send an AJAX POST-request with jQuery
        $.post("/api/new", newUser)
        // On success, run the following code
        .then(function () {
            $("#room-name").text(newUser.topic);
            $("#users").text(newUser.username);
        });
    });

    // When the page loads, grab all of our users
    $.get("/api/all", function (data) {
        if (data.length !== 0) {
            for (var i = 0; i < data.length; i++) {

                $("#room-name").text(data[i].topic);
                $("#users").text(data[i].username);
                
                $("#room").append('<option value="' + data[i].topic + '">' + data[i].topic + '</option>');
            };
        };
    });
});