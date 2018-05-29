import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { paymentPage } from '../payment/payment';

import { promocodePage } from '../promocode/promocode';

@Component({
	selector:'page-checkout',
	templateUrl:'checkout.html',
	styleUrls:['/pages/checkout/checkout.scss']
})
export class CheckoutPage {
	
	checkoutitems :any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
		this.checkoutitems = [
			{
        		title:'Robins Jean Flap Cotton Distress Jeans',
        		priceis:'539',
		        pricewas:'539',
		        product_id:"986204",
		        product_thumbimages:"https:\/\/ids-static.menamall.com\/MS-MJN-AB1341\/MS-MJN-AB1341-thumb.jpg",
		        color:{
		        	title:'red',
		        	value:0
		        },
		        quantity:1
		    } 
		]
	}

	openpromoModal() {
    	let sortModal = this.modalCtrl.create(promocodePage);
    	sortModal.present();
  	}

  	gotopayment(){
  		this.navCtrl.push(paymentPage);
  	}
}