import { Component } from '@angular/core';
import { ViewController,ModalController} from 'ionic-angular';

@Component({
	templateUrl:'producttypefilter.html'
})

export class TypefilterPage {
	
	typesListing:any;

	constructor(public viewCtrl:ViewController,public modalCtrl: ModalController) {
		this.typesListing = [
			{title:'Slim', value:19, count:11},
			{title:'Straights', value:20, count:12},
			{title:'Tapered', value:21, count:13},
			{title:'Skinny', value:22, count:14},
			{title:'Relaxed', value:24, count:14}
		]
	}

	closeModal(){
		this.viewCtrl.dismiss();
	}
}