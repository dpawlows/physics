require.config({
  paths: {
    "jquery": "http://code.jquery.com/jquery-latest.min",
    "underscore": "lib/underscore",
  }
});

require(['lib/modules/template'], function(template) {
  template.showName("Dave");
});
