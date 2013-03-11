/** Add config data for module toolbar-navigation-require */
require.config({
	baseUrl: './',
	config : {
		'widgets/toolbar-navigation-require/main' : {
			nbPage: 28
		}
	}
});


define(['components/aura/lib/aura'], function(Aura, test) {

	'use strict';
	
	/** A possible configuration data object */
	var config = {
		reader: {
			id: 				1980648,
			productId: 	2002904,
			nbPages: 		28,
			name: 			"Super Doc",
			mode: 			"",
			display: 		"infinite",
			q: 					""
		}
	};

	Aura(config)
	.use('extensions/aura-handlebars')
	.use('extensions/aura-backbone')
	.use('extensions/aura-reader')
	.use(function (app) {
		window.reader = app.createSandbox();
	})
	.start({ widgets: 'body' }).then(function() {
		console.warn('Aura started...');
	});
});
