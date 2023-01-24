
window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "none";
});


// for dark mode//

let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "./images/oy.svg";
  } else {
    this.firstElementChild.src = "./images/oy.svg";
  }
  document.body.classList.toggle("light");
});



// for back to top//

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}