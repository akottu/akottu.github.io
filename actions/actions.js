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

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}