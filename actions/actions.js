var home = document.getElementById('home-page');
var resume = document.getElementById('resume-page');
var portfolio = document.getElementById('portfolio-page');

var red = "#FDDFDF";
var orange = "#FAC898";
var yellow = "#FDFD96";
var green = "#DEFDE0";
var blue = "#DEF3FD";
var purple = "#F0DEFD";

red = "#FDDFDF";
orange = "#ffb347";
yellow = "#FFFF99";
green = "#90EE90";
blue = "#ADD8E6";
purple = "#CBC3E3";

red = "#dea5a4";

// var red = "#ff6961";
// var orange = "#ffb347";
// var yellow = "#fdfd96";
// var green = "#77dd77";
// var blue = "#aec6cf";
// var purple = "#b39eb5";

var colors = {red, orange, yellow, green, blue, purple};

function getRandomBackgroundGradient() {
  switch(Math.floor(Math.random() * 12) + 1) {
      case 1:
        color1 = red;
        color2 = orange;
        break;
      case 2:
          color1 = orange;
          color2 = yellow;
        break;
      case 3:
        color1 = yellow;  
        color2 = green;
        break;
      case 4:
          color1 = green;
          color2 = blue;
        break;
      case 5:
        color1 = blue;
        color2 = purple;
        break;
      case 6:
          color1 = purple;
          color2 = red;
        break;
      case 7:
          color1 = red;
          color2 = purple;
          break;
      case 8:
          color1 = purple;
          color2 = blue;
          break;
      case 9:
          color1 = blue;
          color2 = green;
          break;
      case 10:
          color1 = green;
          color2 = yellow;
          break;
      case 11:
          color1 = yellow;
          color2 = orange;
          break;
      case 12:
          color1 = orange;
          color2 = red;
          break;
      default:
          // color1: whitesmoke;
          // color2: black;
    }
    var background = "background-image: linear-gradient(to bottom right, " + color1 + ", " + color2 + ");";
    return background;
}

var background = getRandomBackgroundGradient();
home.setAttribute('style', background);
resume.setAttribute('style', background);
portfolio.setAttribute('style', background);

function changeBackground() {
  var background = getRandomBackgroundGradient();
  home.setAttribute('style', background);
  resume.setAttribute('style', background);
  portfolio.setAttribute('style', background);
}