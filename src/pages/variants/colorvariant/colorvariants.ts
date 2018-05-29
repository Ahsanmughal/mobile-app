import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';

@Component({
	templateUrl:'colorvariants.html'
})
export class ColorvariantPage {
	
	colorsList:any;
	selectedcolor:any;
	selectedcolor_size:any;

	constructor(public viewCtrl: ViewController,public navParams: NavParams) {
		this.colorsList = this.navParams.data.colors;
		this.selectedcolor = this.navParams.data.s_color;
	}

	closeModal(){
		this.viewCtrl.dismiss({selectedsizes: this.selectedcolor_size});
	}
	radioChecked(resp){
		this.selectedcolor_size = resp;
	}
}