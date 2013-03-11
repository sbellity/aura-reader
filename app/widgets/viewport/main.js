define(['underscore', 'text!./viewport.tmp'], function(_, template) {
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
