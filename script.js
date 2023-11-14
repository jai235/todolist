    //select the list  tag for append purpose
    var ul_js = document.querySelector("#list-container");
    var input_js = document.querySelector("#inp")

    //function for creating new element and add it into the below list
    function add_new() {

      //avoid the empty input handeling
      if (input_js.value.trim() === "") {
        alert("Please enter a task.");
        return;
      }

      //create the list
      var nl = document.createElement("li");

      //add date and time of creation of event
      var date = new Date();
      var date_str = date.toLocaleDateString();
      var time_str = date.toLocaleTimeString();

      //add value and delete btn  and date+time
      nl.innerHTML = input_js.value + " " + "<button class='list_d_btn' onclick = 'deleteItem(event)' >Delete</button>" + "       "+"<span class='date-time'>" + date_str + " " + time_str + "</span>";
      ul_js.append(nl);


      //clear the value in tab after each new entry
      input_js.value = "";
    }

    //function for delete item
    function deleteItem(event) {
      event.target.parentElement.remove();
    }

    //enter key event for add new function
    function enterKey(event) {
      if (event.keyCode == 13) {
        add_new();
      }
    }

    function clearall() {
      var ul_js = document.querySelector("#list-container");
      ul_js.innerHTML = " ";
    }
    //add delete button  to the window object
    window.onkeydown = function(event) {
      if (event.keyCode == 46) {
        clearall();
      }
    }