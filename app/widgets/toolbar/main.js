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
