var chartData = [
  {
    value: 30,
    color:"#F7464A"
  },
  {
    value : 50,
    color : "#E2EAE9"
  },
  {
    value : 100,
    color : "#D4CCC5"
  },
  {
    value : 40,
    color : "#949FB1"
  },
  {
    value : 120,
    color : "#4D5360"
  }

];

var chart;



$(document).ready(function() {
  skrollr.init();
  SLOE.make.title({
    context : {
      "title" : "Old Ottawa East (OOE) is..."
    },
    duration : 1500
  });
  SLOE.make.slide({
    context : {
      "title" : "yo yo yo"
    },
    duration : 1500
  });
});