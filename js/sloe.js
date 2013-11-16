$(document).ready(function() {

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
    backgroundImage : "assets/img/mushroom.jpg",
    backgroundParallaxDistance : 500,
    duration : 1500
  });

  skrollr.init();
});