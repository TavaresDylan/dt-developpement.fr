/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/* SCRIPT Menu Flottant */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("hamburger-sidebar").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-550px";
    document.getElementById("hamburger-sidebar").style.top = "-650px";
  }
  prevScrollpos = currentScrollPos;
}

// Script Menu Hamburger
var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector("#hamburger-sidebar-body");
var sidebar = document.querySelector("#hamburger-sidebar");
var button = document.querySelector("#hamburger-btn");
var overlay = document.querySelector("#hamburger-overlay");
var social = document.querySelector(".social-container");
var btnCloseSidebar = document.querySelector("#btn-close-sidebar");

// Réplique le contenu du menu dans le tag sidebar-body
sidebarBody.innerHTML = content.innerHTML;
sidebarBody.innerHTML += social.innerHTML;


function HideShowBurger(mediaWidth) {
  if (mediaWidth.matches) { // If media query matches
    //console.log("media < 700px")
    // Make appear burger
    button.style.display="block";
    // Make disappear classics nav links and socials
    social.style.display="none";
    content.style.display="none";
  } else {
    //console.log("media > 700px")
    // Make disappear burger
    button.style.display="none";
    overlay.style.display="none";
    // Make appear classics nav links and socials
    social.style.display="block";
    content.style.display="block";
  }
}
var mediaWidth = window.matchMedia("(max-width: 960px)")
HideShowBurger(mediaWidth) // Call listener function at run time
mediaWidth.addListener(HideShowBurger) // Attach listener function on state changes 


function showSideBar(){
  if(button.classList[2]== "open"){
    button.classList.remove("open");
    sidebar.style.display="none";
    overlay.style.display="none";
  }else{
    //console.log("Click on BurgerButton !")
    //console.log(sidebar)
    button.classList.add("open");
    sidebar.style.display="block";
    overlay.style.display="block";
  }
}
button.addEventListener("click", showSideBar)


// SCRIPT SWITCH THEME COLOR
var switchBtn = document.getElementsByClassName("switch")
var checkbox = document.getElementById("checkbox")
// All elements to change background
var header = document.getElementById("header");
var presentationTxt = document.getElementById("text-presentation");
var sd = document.getElementById("section4");
var skillCards = document.getElementsByClassName("content");
var section2 = document.getElementById("section2");
function checkedSwitch(){
  //console.log("Click on checkbox")
  if (checkbox.checked == true){
    //console.log("Switch on LightTheme")
    header.style.background = "radial-gradient(ellipse at bottom, #86999d 0%, #466270 100%)";
    presentationTxt.style.background = "radial-gradient(ellipse at bottom, #86999d 0%, #466270 100%)";
    for (var i = 0; i < skillCards.length; i++) {
      console.log(skillCards[i]); //second console output
      skillCards[i].style.background = "radial-gradient(ellipse at bottom, #86999d 0%, #466270 100%)";
    }
    section2.style.background = "radial-gradient(ellipse at bottom, #86999d 0%, #466270 100%)";
  }
  if (checkbox.checked == false){
    //console.log("Switch on DarkTheme")
    header.style.background = "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)";
  }
}
checkbox.addEventListener("click", checkedSwitch)

// STARS OF SKILLS

// Récupération des éléments 
var htmlSkill = document.getElementById("web-list").childNodes[1].childNodes[1]
var html = document.getElementById("web-list").childNodes[1]

// Test de récupération de tout les éléments li
var liArray = []

document.getElementById("web-list").childNodes.forEach(element =>{
  if (element.nodeName == "LI"){
    console.log(element)
    liArray.push(element)
  } 
})
console.log("liArray = "+liArray)
liArray.forEach(elements => {
  console.log(elements)
  elements.addEventListener("click", addStars)
})
// FIN TEST


console.log("li html : ",html)
console.log(htmlSkill)


var etoilePleine = "<i class='animate__animated animate__zoomIn fas fa-star'></i>"
var etoileVide = "<i class='animate__animated animate__zoomIn  animate__delay-5s far fa-star'></i>"
// Fonction d'ajout des étoiles
function addStars(){
  console.log(htmlSkill)
  html.innerHTML += " <p><i class='animate__animated animate__zoomIn fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-1s fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-2s  fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-3s  fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-4s far fa-star'></i></p>"
}

html.addEventListener("click", addStars)
/* SCRIPT Effet paralax */
/*$(document).ready(function(){		
    $('.section1').parallax("center", 0, 0.1, true);
    $('.section2').parallax("center", 900, 0.1, true);
    $('.section3').parallax("center", 2900, 0.1, true);
})*/

/*if (window.pageYOffset >= 1090){
  document.getElementById('yep').className= "animate__animated animate__backInLeft text-desc";
}*/
