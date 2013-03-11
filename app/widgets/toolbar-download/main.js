define(['underscore', 'text!./toolbar.tmp'], function(_, template) {
	return {
		initialize: function() {
			this.render();
		},

		render: function() {
			this.html(template);
		}
	};
});
