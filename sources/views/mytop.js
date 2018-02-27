import {JetView} from "webix-jet";
import TopView from "views/top";
import {data} from "models/records";

export default class MyTopView extends TopView {
	init(view){
		view.getChildViews()[0].parse(data);
		this._counter = 0;
	}
}