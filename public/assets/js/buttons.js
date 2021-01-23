$(document).ready(function () {
  function swapStyle(sheet) {
    //added id of pagestyle to link for css style sheets
    document.getElementById("pagestyle").setAttribute("href", sheet);
  }
//Button 1 Default Theme
  $("#default").on("click", function () {
    swapStyle("./assets/css/chatroom.css");
    localStorage.setItem("style", "./assets/css/chatroom.css");

  });
//Button 2 Ocean Theme
  $("#style2").on("click", function () {
    swapStyle("./assets/css/style2.css");
    localStorage.setItem("style", "./assets/css/style2.css");

  });
//Button 3 Rose Theme
  $("#style3").on("click", function () {
    swapStyle("./assets/css/style3.css");
    localStorage.setItem("style", "./assets/css/style3.css");

  });
  //Button 4 Turtle Theme
  $("#style4").on("click", function () {
    swapStyle("./assets/css/style4.css");
    localStorage.setItem("style", "./assets/css/style4.css");

  });
});
