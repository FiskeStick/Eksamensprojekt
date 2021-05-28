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
