import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
	templateUrl:'sortmodal.html'
})
export class SortmodalPage {
	constructor(public viewCtrl:ViewController) {}
	closeModal(){
		this.viewCtrl.dismiss();
	}
}