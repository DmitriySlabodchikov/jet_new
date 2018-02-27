import {JetView} from "webix-jet";

export default class PopupView extends JetView {
	config(){
		return { 
			view:"window", position:"center", head:"Some", body: { 
				view:"form", id: "popup:form", elements:[
					{ view:"text", label:"Text", name:"text" },
					{ view:"button", value:"Show text", click:() => this.doSome() },
					// or { view:"button", label:"Show text", click: function() {this.$scope.doSome()} },
					{ view:"button", value:"Get parent", click:()=> {console.log(this.getParentView())} },
					{ view:"button", value:"Close", click:() => this.getRoot().hide() }
				]
			}				
		};
	}
	init(view){
		// view.getBody().attachEvent("onChange", this.doSome );
	}
	showWindow() {
		this.getRoot().show();
	}
	doSome() {
		webix.message($$("popup:form").getValues().text);
	}
};