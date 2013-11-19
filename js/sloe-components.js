(function() {
  console.log("wut");
  window.SLOE = {
    components :[],

    afterElement : function () {
      $('.stretch-header').each(function() {
        $(this).css({'background-image' : 'url(' + $(this).data("src") + ')'});
      });
    },

    init : function() {
      SLOE.registerHelpers();
    },

    registerHelpers : function() {
      Handlebars.registerHelper("before", function(number, offset) {
        return number - offset;
      });
      Handlebars.registerHelper("after", function(number, offset) {
        return number + offset;
      });
      Handlebars.registerHelper("parallaxBackground", function(context) {
        return SLOE.loadComponent('parallax-bg', context);
      });
    },

    loadComponent : function(componentName, context) {
      var templateString = $('#component-' + componentName).html();
      var component = Handlebars.compile(templateString);
      return component(context);
    },

    loadTemplate : function(templateName, context, duration) {
      console.log($('#skrollr-body'));
      var element = $('<div></div>');
      $('#skrollr-body').append(element);
      SLOE.components.push(element);
      element.handlebarsContext = context;
      element.duration = {
        start : SLOE.components.length === 1 ? 0 : SLOE.components[SLOE.components.indexOf(element) - 1].duration.end,
        end : SLOE.components.length === 1 ? duration : SLOE.components[SLOE.components.indexOf(element) - 1].duration.end + duration,
      };
      context.duration = element.duration;
      var template = $('#template-' + templateName).html();
      element.template = Handlebars.compile(template);
      element.html(element.template(context));
      SLOE.afterElement();

    },

    make : {
      title : function(options) {
        var settings = SLOE.validateOptions(options);
        SLOE.loadTemplate('title', settings.context, settings.duration);
      },
      slide : function(options) {
        var settings = SLOE.validateOptions(options);
        SLOE.loadTemplate('slide', settings.context, settings.duration);
      }
    },

    validateOptions : function(options) {
      var settings = {};
      settings.context = options.context || "no no no";
      settings.duration = options.duration || 0;
      settings.context.backgroundImage = options.context.backgroundImage;
      settings.context.backgroundParallaxDistance = options.context.backgroundParallaxDistance;
      return settings;
    }



  };

  SLOE.init();
})();