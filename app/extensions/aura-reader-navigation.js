define({
	initialize: function(app) {

		$.extend(app.config,  {
			page : {
				current : 0,
				total : 28
			}
		});

		app.sandbox.navigation = {};

		app.sandbox.navigation.changePage = function (newPage) {
			console.log('[Service] navigation.changePage called : ' , newPage);
			if (newPage === '+')
				newPage = app.config.page.current + 1;
			else if (newPage === '-')
				newPage = app.config.page.current - 1;

			if (newPage < app.config.page.total && newPage > 0) {
				app.config.page.current = parseInt(newPage, 10);
				app.sandbox.emit('changePage', app.config.page.current);
				return true;
			}
			return false;
		};

	},

	afterAppStart: function() {
	}
});