$(document).ready(function() {

    // When the user insert the new topic, the new topic will be added to the room list.
    $("#add-topic").click(function() {

        // Append the user input to the room options.
        $("#room").append('<option value="' + $("#new-topic").val() + '">' + $("#new-topic").val() + '</option>');
        $("#new-topic").val("");
    });
});