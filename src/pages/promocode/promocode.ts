import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
	templateUrl:'promocode.html',
	styleUrls:['/pages/promocode/promocode.scss'],
	selector:'page-promocode'
})

export class promocodePage{
 
	constructor(public viewCtrl: ViewController){}

 	closeModal(){
		this.viewCtrl.dismiss();
	}

}