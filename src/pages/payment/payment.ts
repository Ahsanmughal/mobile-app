import { Component } from '@angular/core';
import { ThanksPage } from '../thanks/thanks';
import { NavController,NavParams } from 'ionic-angular';

@Component({
	selector: 'page-payment',
	templateUrl:'payment.html',
  	styleUrls: ['/pages/payment/payment.scss']
})

export class paymentPage{

	checkedIdx=0;
	options:any;
	constructor(public navCtrl: NavController,public navParams: NavParams) {
	  this.options = ['CREDIT CARD' ,'CASH ON DELIVERY', 'PAYPAL'];
	}
	
	gotothanks(){
		this.navCtrl.push(ThanksPage);
	}
}