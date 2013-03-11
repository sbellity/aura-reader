define(['underscore', 'hbs!./viewport'], function(_, template) {

	'use strict';

	return {
		initialize: function() {
			_.bindAll(this);

			this.render();
		},

		render: function() {
			this.html(template);    
		}
	};
});
