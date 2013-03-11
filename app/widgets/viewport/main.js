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
