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
