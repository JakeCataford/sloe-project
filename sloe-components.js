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
      $.get('templates/' + templateName + '.hbs', '', function(data, textStatus, jqXHR) {
        element.template = Handlebars.compile(data);
        element.html(element.template(context));
        SLOE.afterElement();
        skrollr.get().refresh();
      });

    },

    make : function(componentName, options) {
      var settings = {};
      settings.context = options.context || "no no no";
      settings.duration = options.duration || 0;
      SLOE.loadTemplate(componentName, settings.context, settings.duration);
    }
  };
  SLOE.init();
})();