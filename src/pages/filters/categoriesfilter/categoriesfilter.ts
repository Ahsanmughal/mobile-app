import { Component } from '@angular/core';
import { ViewController,ModalController} from 'ionic-angular';

@Component({
	templateUrl:'categoriesfilter.html'
})

export class CategoryfilterPage {
	
	categoriesListing:any;

	constructor(public viewCtrl:ViewController,public modalCtrl: ModalController) {
		this.categoriesListing = [
			{title:'Men T Shirts', value:19, count:11},
			{title:'Men Hoodies & Sweaters', value:20, count:12},
			{title:'Men Outerwear', value:21, count:13},
			{title:'Men Pants', value:22, count:14},
			{title:'Men Suits And jackets', value:23, count:15},
			{title:'Men Sweats And Joggers', value:24, count:16},
			{title:'Men Sleapwear', value:25, count:17},
			{title:'Men Polo Shirts', value:26, count:18},
			{title:'Men Shorts', value:27, count:19},
			{title:'Men Swimwear', value:28, count:20}
		]
	}

	closeModal(){
		this.viewCtrl.dismiss();
	}
}