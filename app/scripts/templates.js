this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["reader/reader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div data-aura-widget=\"toolbar\"></div>\n<div data-aura-widget=\"toolbar\"></div>\n<div data-aura-widget=\"viewport\"></div>\n";
  });

this["Handlebars"]["templates"]["toolbar-display/toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<input type='button' class='zoom-less' value='-'></input>\n<input type='button' class='zoom-more' value='+'></input>\n<input type='button' class='fullscreen' value='Fullscreen'></input>\n\n";
  });

this["Handlebars"]["templates"]["toolbar-download/toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<input type='button' class='download' value='Donwload'></input>\n";
  });

this["Handlebars"]["templates"]["toolbar-navigation/toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input type='button' class='page-less' value='<-'></input>\n<input type='input' class='current-page' size='3' value='"
    + escapeExpression(((stack1 = ((stack1 = depth0.doc),stack1 == null || stack1 === false ? stack1 : stack1.currentPage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'></input>\n<p > / <p class='total-page'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.doc),stack1 == null || stack1 === false ? stack1 : stack1.nbPages)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p></p>\n<input type='button' class='page-more' value='->'></input>\n\n";
  return buffer;
  });

this["Handlebars"]["templates"]["toolbar/toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n"
    + escapeExpression(((stack1 = ((stack1 = depth0.doc),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n<div data-aura-widget=\"toolbar-download\"></div>\n<div data-aura-widget=\"toolbar-navigation\"></div>\n<div data-aura-widget=\"toolbar-display\"></div>\n<div class='pop_up'></div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n  Loading...\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.doc, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["viewport/viewport"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>"
    + escapeExpression(((stack1 = ((stack1 = depth0.doc),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n\n<p>";
  if (stack2 = helpers.content) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.content; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n\n<footer>Page "
    + escapeExpression(((stack1 = ((stack1 = depth0.doc),stack1 == null || stack1 === false ? stack1 : stack1.currentPage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " / "
    + escapeExpression(((stack1 = ((stack1 = depth0.doc),stack1 == null || stack1 === false ? stack1 : stack1.nbPages)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</footer>\n\n";
  return buffer;
  });