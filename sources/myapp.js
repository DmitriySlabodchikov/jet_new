import "./styles/app.css";
import "writeSomethingInConsole";
import {JetApp, plugins} from "webix-jet";

webix.ready(() => {
	if (webix.CustomScroll && !webix.env.touch)
		webix.CustomScroll.init();

	var app = new JetApp({
		id:			APPNAME,
		version:	VERSION,
		start:		"/top/start"
	});

	app.use(plugins.Locale);
	app.render();

	app.attachEvent("app:error:resolve", function(err, url) {
        webix.delay(() => app.show("/top/start"));
    });
});