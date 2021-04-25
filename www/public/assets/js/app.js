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
// Récupération du déclencheur
var switchBtn = document.getElementsByClassName("switch")
var checkbox = document.getElementById("checkbox")
// All elements to change background
var header = document.getElementById("header");
var presentationTxt = document.getElementById("text-presentation");
var section4 = document.getElementById("section4");
var skillCards = document.getElementsByClassName("content");
var section2 = document.getElementById("section2");
var timeline = document.getElementById("timeline2");
var footer =  document.getElementsByTagName("footer")[0]
var section5 = document.getElementById("section5")
// Compilation de tout les éléments dans un tableau
const elements = [header,presentationTxt,section2,section4,section5,footer]
// Définition des backgrounds Dark et Light
const bgDark = "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)";
const bgLight = "radial-gradient(ellipse at bottom, #86999d 0%, #466270 100%)";
function checkedSwitch(){
  console.log("Click on checkbox")
  if (checkbox.checked == true){
    console.log("Switch on LightTheme")
    elements.forEach(element => element.style.background = bgLight)
    Array.from(skillCards).forEach(card => card.style.background = bgLight)
    section5.style.background = "radial-gradient(ellipse at top, #86999d 0%, #466270 100%)"
  }
  if (checkbox.checked == false){
    console.log("Switch on DarkTheme")
    elements.forEach(element => element.style.background = bgDark)
    Array.from(skillcard).forEach(element => element.style.background = bgDark)
  }
}
checkbox.addEventListener("click", checkedSwitch)

// STARS OF SKILLS
const htmlLi = document.getElementById("html-li")
const cssLi = document.getElementById("css-li")
const jsLi = document.getElementById("js-li")
const bsLi = document.getElementById("bs-li")
const sassLi = document.getElementById("sass-li")

const stars = "<p><i class='animate__animated animate__zoomIn fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-1s fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-2s  fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-3s  fas fa-star'></i><i class='animate__animated animate__zoomIn  animate__delay-4s far fa-star'></i></p>"
function countStars(nb_full_star){
  if (nb_full_star == 0){
    var str = ""
    for (i=0; i < 5; i++){
      str += "<i class='animate__animated animate__zoomIn far fa-star'></i>"
    }
    return str
  }
}
function addstars(){
  console.log(this)
  console.log(this.id)
  if (this.id == "html-li" & htmlLi.children.length == 2){
    htmlLi.innerHTML += stars
  }
  else if (this.id == "css-li" & cssLi.children.length == 2){
    cssLi.innerHTML += stars
  }
  else if (this.id == "css-li" & cssLi.children.length == 2){
    cssLi.innerHTML += stars
  }
  else if (this.id == "js-li" & jsLi.children.length == 2){
    jsLi.innerHTML += "<p>"+countStars(0)+"</p>"
  }
  else if (this.id == "bs-li" & bsLi.children.length == 2){
    bsLi.innerHTML += stars
  }
  else if (this.id == "sass-li" & sassLi.children.length == 2){
    sassLi.innerHTML += stars
  }
}
htmlLi.addEventListener("click", addstars)
cssLi.addEventListener("click", addstars)
jsLi.addEventListener("click", addstars)
bsLi.addEventListener("click", addstars)
sassLi.addEventListener("click", addstars)


/* SCRIPT Effet paralax */
/*$(document).ready(function(){		
    $('.section1').parallax("center", 0, 0.1, true);
    $('.section2').parallax("center", 900, 0.1, true);
    $('.section3').parallax("center", 2900, 0.1, true);
})*/

/*if (window.pageYOffset >= 1090){
  document.getElementById('yep').className= "animate__animated animate__backInLeft text-desc";
}*/
