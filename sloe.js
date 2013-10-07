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

  $('.stretch-header').each(function() {
    $(this).css({'background-image' : 'url(' + $(this).data("src") + ')'});
  });

  skrollr.init();

  $(document).scroll(function() {
    console.log($(document).scrollTop());
    if($(document).scrollTop() > 3000 && chart == undefined) {
      console.log('doit');
      chart = new Chart($("#dummyChart").get(0).getContext("2d")).PolarArea(chartData, {segmentShowStroke : false});
    }
  });
});