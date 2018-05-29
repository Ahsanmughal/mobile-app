import {Component} from '@angular/core';
import {ViewController , ModalController} from 'ionic-angular';

@Component({
	templateUrl:'genderfilter.html'
})
export class GenderfilterPager{
	
	genderlisting:any;
	constructor(public viewCtrl:ViewController,public modalCtrl: ModalController){
		this.genderlisting = [
			{title:'Men', value:19, count:11},
			{title:'Women', value:20, count:12},
			{title:'Boys', value:21, count:13},
			{title:'Unisex', value:22, count:14},
			{title:'Girl', value:23, count:14}
		]
	}

	closeModal(){
		this.viewCtrl.dismiss();
	}
}