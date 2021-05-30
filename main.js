var coll = document.getElementsByClassName("collapsible");
console.log(coll);
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
console.log(i);
    }
  });
}

//med inspiration fra:
// https://www.w3schools.com/howto/howto_js_collapsible.asp
// Christian H



function sec1() {
  var elmnt1 = document.getElementById("container");
  elmnt1.scrollIntoView();
}
function sec2() {
  var elmnt2 = document.getElementById("container2");
  elmnt2.scrollIntoView();
}
function sec3() {
  var elmnt3 = document.getElementById("container3");
  elmnt3.scrollIntoView();
}
function sec4() {
  var elmnt4 = document.getElementById("container4");
  elmnt4.scrollIntoView();
}

function sec5() {
  var elmnt4 = document.getElementById("container5");
  elmnt4.scrollIntoView();
}

//med inspiration fra:
//https://www.w3schools.com/jsref/met_element_scrollintoview.asp
// Stefan E.J

function on() {
  document.getElementById('overlay').style.display = "block";
}
function off() {
  document.getElementById('overlay').style.display = "none";
}

//med inspiration fra:
//https://discord.com/channels/@me/754631226274349077/848570269122560051
//Jakob
