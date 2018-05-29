import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
	selector: 'page-profile',
	templateUrl:'profile.html',
	  styleUrls: ['/pages/profile/profile.scss']
})
export class profilePage {

	options:any;
	months:any;
	constructor(public viewCtrl: ViewController) {
		this.options = ['MALE' ,'FEMALE'];
		this.months = ['January', 'Februrary', 'March', 'April','May','June','July','August','September','October','November','December'];
	}

	closeModal(){
		this.viewCtrl.dismiss();
	}
}