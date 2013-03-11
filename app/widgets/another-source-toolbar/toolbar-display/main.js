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
