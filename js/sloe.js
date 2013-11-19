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
      "title" : "Main Street renewal",
      "body" : "\
        <ul>\
          <li>Goal is to engage children with nature.</li>\
          <li>Anyone is welcome to help out in the garden, and to harvest from the garden.</li>\
          <li>Hosts play-groups, art-making workshops, organic gardening workshops, harvest feasts and more.</li>\
        </ul>\
      ",
      backgroundImage : "assets/img/trees-and-path.png",
      backgroundParallaxDistance : 500
    },
    
    duration : 2500
  });

  SLOE.make.colorSlide({
    context : {
      "title" : "Main Street renewal",
      "body" : "\
        <ul>\
          <li>Goal is to engage children with nature.</li>\
          <li>Anyone is welcome to help out in the garden, and to harvest from the garden.</li>\
          <li>Hosts play-groups, art-making workshops, organic gardening workshops, harvest feasts and more.</li>\
        </ul>\
      ",
      backgroundColor : "#eeaede",
      iconImage : "assets/img/test-icon.png",
      backgroundParallaxDistance : 500
    },
    
    duration : 2500
  });

  SLOE.make.slide({
    context : {
      "title" : "Main Street renewal",
      "body" : "\
        <ul>\
          <li>Goal is to engage children with nature.</li>\
          <li>Anyone is welcome to help out in the garden, and to harvest from the garden.</li>\
          <li>Hosts play-groups, art-making workshops, organic gardening workshops, harvest feasts and more.</li>\
        </ul>\
      ",
      backgroundImage : "assets/img/trees-and-path.png",
      backgroundParallaxDistance : 500
    },
    
    duration : 2500
  });

  SLOE.make.colorSlide({
    context : {
      "title" : "Main Street renewal",
      "body" : "\
        <ul>\
          <li>Goal is to engage children with nature.</li>\
          <li>Anyone is welcome to help out in the garden, and to harvest from the garden.</li>\
          <li>Hosts play-groups, art-making workshops, organic gardening workshops, harvest feasts and more.</li>\
        </ul>\
      ",
      backgroundColor : "#eeaede",
      iconImage : "assets/img/test-icon.png",
      backgroundParallaxDistance : 500
    },
    
    duration : 2500
  });

  skrollr.init();
});