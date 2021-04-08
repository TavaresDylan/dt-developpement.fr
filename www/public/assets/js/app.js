/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/* SCRIPT Menu Flottant */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-450px";
  }
  prevScrollpos = currentScrollPos;
}


// Script Menu Hamburger
var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector("#hamburger-sidebar-body");
var sidebar = document.querySelector("#hamburger-sidebar");
var button = document.querySelector("#hamburger-btn");
var overlay = document.querySelector("#hamburger-overlay");
var social = document.querySelector(".social-container")

// Réplique le contenu du menu dans le tag sidebar-body
sidebarBody.innerHTML = content.innerHTML;
sidebarBody.innerHTML += social.innerHTML;

function showSideBar(){
  console.log("Click on BurgerButton !")
  console.log(sidebar)
  sidebar.style.display="block"
}
button.addEventListener("click", showSideBar)

/* SCRIPT Effet paralax */
/*$(document).ready(function(){		
    $('.section1').parallax("center", 0, 0.1, true);
    $('.section2').parallax("center", 900, 0.1, true);
    $('.section3').parallax("center", 2900, 0.1, true);
})*/

/*if (window.pageYOffset >= 1090){
  document.getElementById('yep').className= "animate__animated animate__backInLeft text-desc";
}*/
