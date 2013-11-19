$(document).ready(function() {

  SLOE.make.title({
    context : {
      "title" : "Old Ottawa East",
      "subtitle" : "Making Change Work for a Sustainable Future",
      "backgroundParallaxDistance" : 500,
      "backgroundImage" : "assets/img/title-slide-bg.png"
    },
    duration : 1500
  });
  SLOE.make.slide({
    context : {
      "title" : "yo yo yo"
    },
    backgroundImage : "assets/img/mushroom.jpg",
    backgroundParallaxDistance : 500,
    duration : 1500
  });

  skrollr.init();
});