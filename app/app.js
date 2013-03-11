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
		documentId:1980648,
		productId: 2002904,
/*		nbPage: 28,*/
		mode: "",
		display: "infinite",
		q: ""
	};

	Aura(config)
	.use('extensions/aura-handlebars')
	.use('extensions/aura-reader-navigation')
	.registerWidgetsSource('another-source-toolbar', 'widgets/another-source-toolbar')
	.use(function (app) {
		window.reader = app.createSandbox();
	})
	.start({ widgets: 'body' }).then(function() {
		console.warn('Aura started...');
	});
});
