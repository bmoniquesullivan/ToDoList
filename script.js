//Add a new item
function newItem() {
  var li = document.createElement("li");
  var newInput = document.getElementById("newItem").value;
  var node = document.createTextNode(newInput);

  li.appendChild(node);
  if (newInput === "") {
    alert("You didn't type anything to add on your list");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("newItem").value = "";

  var span = document.createElement("SPAN");
  var closing = document.createTextNode("\u2179");
  span.className = "close";
  span.appendChild(closing);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

//Creating closing Buttons
var listItem = document.getElementsByTagName("LI");
for (var i = 0; i < listItem.length; i++) {
  var span = document.createElement("SPAN");
  var closing = document.createTextNode("\u2179");
  span.className = "close";
  span.appendChild(closing);
  listItem[i].appendChild(span);
}

//Click to delete
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//Mark an item as done on click
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (rm) {
    if (rm.target.tagName === "LI") {
      rm.target.classList.toggle("checked");
    }
  },
  false
);
