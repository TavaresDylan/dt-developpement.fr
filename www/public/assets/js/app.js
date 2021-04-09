/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/* SCRIPT Menu Flottant */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("hamburger-sidebar").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-450px";
    document.getElementById("hamburger-sidebar").style.top = "-450px";
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
var btnCloseSidebar = document.querySelector("#btn-close-sidebar")

// Réplique le contenu du menu dans le tag sidebar-body
sidebarBody.innerHTML = content.innerHTML;
sidebarBody.innerHTML += social.innerHTML;


function HideShowBurger(mediaWidth) {
  if (mediaWidth.matches) { // If media query matches
    console.log("media < 700px")
    // Make appear burger
    button.style.display="block";
    // Make disappear classics nav links and socials
    social.style.display="none"
    content.style.display="none"
  } else {
    console.log("media > 700px")
    // Make appear burger
    button.style.display="none";
    // Make appear classics nav links and socials
    social.style.display="block"
    content.style.display="block"
  }
}
var mediaWidth = window.matchMedia("(max-width: 960px)")
HideShowBurger(mediaWidth) // Call listener function at run time
mediaWidth.addListener(HideShowBurger) // Attach listener function on state changes 


function showSideBar(){
  if(button.classList[2]== "open"){
    button.classList.remove("open")
    sidebar.style.display="none"
  }else{
    console.log("Click on BurgerButton !")
    console.log(sidebar)
    button.classList.add("open")
    sidebar.style.display="block"
  }
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
