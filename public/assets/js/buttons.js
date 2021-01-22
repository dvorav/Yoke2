$(document).ready(function() {
    function swapStyle(sheet) {
        //added id of pagestyle to link for css style sheets
        document.getElementById("pagestyle").setAttribute("href", sheet);
      }
      
      $("#default").on("click", function(){
        swapStyle("./assets/css/chatroom.css");
      });
      
      $("#style2").on("click", function(){
        swapStyle("./assets/css/style2.css");
      });
    
      $("#style3").on("click", function() {
          swapStyle("./assets/css/style3.css");
      });
    });