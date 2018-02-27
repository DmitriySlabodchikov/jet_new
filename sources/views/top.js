import {JetView, plugins} from "webix-jet";
import {data} from "models/menu";
import start from "views/start";
import StartSubview from "views/start_subview";
import PopupView from "views/mypopup";

export default class TopView extends JetView {
	config(){
		return {
			type:"line", cols:[
				{
					view:"sidebar",
					id:"top:menu"
				},
				{
					rows: [
						{ view: "button", value:"Counter", click:() => this.doClick("clicked") },
						start,
						{ $subview:StartSubview },
						{ $subview:"url", name:"url" },
						{ $subview:true }, // Dynamic subview
						{ view:"template", template: "hidden", some:1 },
						{ view:"button", value:"webix.ui() popup", click:() => this._popup.show() },
						{ view:"button", value:"this.ui() popup", click:() => this._popup1.showWindow() },
						{ view:"text", label:"some" },
						{ view:"text", label:"other" },
						{ view:"list", id:"top:list", template:"id: #id#, value: #value#" }
					]
				}
			]
		};
	}
	init(view){
		this.use(plugins.Menu, "top:menu");
		view.queryView({ some:1 }).hide();
		view.queryView({ view:"text" }, "all").forEach((obj)=>{obj.hide();});
		view.getChildViews()[0].parse(data);

		this.$$("top:list").parse(data);

		this._counter = 0;
		this._popup = webix.ui({
			view:"window",
			position:"center",
			head:"Create popup with webix.ui()",
			body: { view:"button", value:"Close", click:() => this._popup.hide() }
		});
		this._popup1 = this.ui(PopupView);
	}
	ready(){
		console.log(this.getSubView("url"));
	}
	doClick(message){
		this._counter++;
		webix.message(message + this._counter);
	}
	destroy(){
		this._popup.destroy();
	}
}