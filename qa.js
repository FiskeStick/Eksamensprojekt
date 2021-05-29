var coll = document.getElementsByClassName("collapsible"); // variabel for at hente class fra HTML
var i; // variabel i. Kunne også hedde x eller y

for (i = 0; i < coll.length; i++) { // for loop
  coll[i].addEventListener("click", function() { // når man kliker så aktiveres funktionen
    this.classList.toggle("active"); // Hvis collapsible er åbent
    var content = this.nextElementSibling; // variabel content sørger for at næste collapsible sibling kommer med
    if (content.style.display === "block") { // hvis content er synligt. Tre '===' betyder Strict equality
      content.style.display = "none"; // så er content usynligt
    } else {
      content.style.display = "block"; // ellers synligt
    }
  });
}
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


// Stefan E.J