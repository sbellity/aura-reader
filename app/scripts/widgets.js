define(['underscore', 'hbs!./reader'], function(_, template) {

	'use strict';

	return {
		initialize: function() {
			
			_.bindAll(this);

			this.render();
		},

		render: function() {
			this.html(template({"nbPage" : this.options.nbPage}));
		}

	};
});




//--------


define(['underscore', 'hbs!./toolbar'], function(_, template) {

	'use strict';

	return {
		initialize: function() {
			this.render();
		},

		render: function() {
			this.html(template);	
		}
	};
});




//--------


define(['underscore', 'hbs!./toolbar'], function(_, template) {

	'use strict';

	return {
		initialize: function() {
			this.render();
		},

		render: function() {
			this.html(template);
		}
	};
});




//--------


define(['underscore', 'hbs!./toolbar'], function(_, template) {

	'use strict';

	return {
		type: "Backbone",

		events: {
			'click .page-less' : function() {
				this.sandbox.emit('reader.page.prev');
			},			
			'click .page-more' : function() {
				this.sandbox.emit('reader.page.next');
			},
			'change .current-page' : function(ev) {
				var page = this.sandbox.dom.find(ev.target).val();
				this.sandbox.emit('reader.page.set', page);
			}
		},

		initialize: function() {
			_.bindAll(this)
			this.sandbox.on('reader.doc.change', this.render);
			this.render();
		},

		render: function(doc) {
			doc = doc || this.sandbox.reader.getCurrentDoc();
			this.html(template({ doc: doc }));
			return this;
		}

	};
});




//--------


define(['hbs!./toolbar'], function(template) {

	'use strict';

	return {
		initialize: function() {
			this.render();
      this.sandbox.on('reader.doc.reset', _.bind(this.render, this));
		},

		render: function() {
      var doc = this.sandbox.reader.getCurrentDoc();
			this.html(template({ doc: doc }));
		}
	};
});




//--------


define(['underscore', 'hbs!./viewport'], function(_, template) {

	'use strict';

	return {
		initialize: function() {
			_.bindAll(this);
			this.render();
      this.sandbox.on('reader.doc.change', _.bind(this.render, this));
		},

		render: function() {
			var reader = this.sandbox.reader;
      var doc = reader.getCurrentDoc();
      var content = reader.getCurrentContent();
			this.html(template({ doc: doc, content: content }));
		}
	};
});
