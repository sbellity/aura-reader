this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["reader/reader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-aura-widget=\"toolbar\" data-aura-navigation=\"toolbar-navigation\" data-aura-nb-page=\"";
  if (stack1 = helpers.nbPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nbPage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\r\n<div data-aura-widget=\"toolbar\" data-aura-navigation=\"toolbar-navigation-require\"></div>\r\n<div data-aura-widget=\"viewport\"></div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["toolbar-navigation-require/toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type='button' class='page-less' value='<-'></input>\r\n<input type='input' class='current-page' size='3' value='0'></input>\r\n<p > / <p class='total-page'>";
  if (stack1 = helpers.nbPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nbPage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p></p>\r\n<input type='button' class='page-more' value='->'></input>\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["toolbar-navigation/toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type='button' class='page-less' value='<-'></input>\r\n<input type='input' class='current-page' size='3' value='0'></input>\r\n<p > / <p class='total-page'>";
  if (stack1 = helpers.nbPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nbPage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p></p>\r\n<input type='button' class='page-more' value='->'></input>\r\n\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["toolbar/toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n	 data-aura-nb-page=\"";
  if (stack1 = helpers.nbPage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nbPage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\r\n";
  return buffer;
  }

  buffer += "<div data-aura-widget=\"toolbar-download\"></div>\r\n\r\n<div data-aura-widget=\"";
  if (stack1 = helpers.navigation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.navigation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\r\n";
  stack1 = helpers['if'].call(depth0, depth0.nbPage, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n></div>\r\n\r\n<div data-aura-widget=\"toolbar-display\"></div>\r\n<div class='pop_up'></div>\r\n";
  return buffer;
  });