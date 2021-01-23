$(document).ready(function() {

    let selectedTopic = [];

    // When the user insert the new topic, the new topic will be added to the room list.
    $("#add-topic").click(function() {

        // Append the user input to the room options.
        $("#room").append('<option value="' + $("#new-topic").val() + '">' + $("#new-topic").val() + '</option>');
        $("#new-topic").val("");

        $("#room option").each(function() {
            if($.inArray(this.value, selectedTopic) >-1){
                $(this).remove();
            } else {
                selectedTopic.push(this.value);
            };
        });
    });

    // When user clicks add-btn
    $("#join-btn").on("click", function() {

        // Make a newUser object
        let newUser = {
            username: $("#username").val().trim(),
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/user", newUser)
        // On success, run the following code
        .then(function () {
            $("#users").text(newUser.username);
        });

        // Make a newChat object
        let newChat = {
            topic: $("#room").val().trim(),
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/chat", newChat)
        // On success, run the following code
        .then(function () {
            $("#room-name").text(newChat.topic);
        });
    });

    // When the page loads, grab all of our users
    $.get("/api/chat", function (data) {
        if (data.length !== 0) {
            for (let i = 0; i < data.length; i++) {
              $("#room-name").text(data[i].topic);
              $("#room").append('<option value="' + data[i].topic + '">' + data[i].topic + "</option>");
            };
        };
    });
});