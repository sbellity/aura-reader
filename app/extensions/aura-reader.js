define({

	initialize: function(app) {


		var Backbone = require('backbone');

		var Document = Backbone.Model.extend({
			defaults: {
				currentPage: 0,
				nbPages: 0
			},

			initialize: function() {
				_.bindAll(this);
			},

			nextPage: function() {
				var currentPage = this.get('currentPage');
				if (currentPage <= this.get('nbPages')) {
					this.set('currentPage', currentPage + 1);
				}
			},
			prevPage: function() {
				var currentPage = this.get('currentPage');
				if (currentPage > 1) {
					this.set('currentPage', currentPage - 1);
				}
			},
			setPage: function(page) {
				page = parseInt(page, 10);
				if (page && page > 0 && page <= this.get('nbPages')) {
					this.set('currentPage', page);
				}
			}
		});

		var doc = new Document(app.config.reader);
		var mediator = app.core.mediator;

		mediator.on('reader.page.set', 		doc.setPage);
		mediator.on('reader.page.next', 	doc.nextPage);
		mediator.on('reader.page.prev', 	doc.nextPage);
		mediator.on('reader.doc.reset', function(attrs) {
			doc.set(attrs);
		});

		doc.on('change', function(res) {
			var ret = res.toJSON();
			mediator.emit('reader.doc.change', ret);
		});

		app.sandbox.reader = {
			getCurrentDoc: function() {
				if (doc.id) {
					return doc.toJSON();	
				}
			}
		};

	}
});