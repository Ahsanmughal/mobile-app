import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { profilePage } from '../profile/profile';
import { orderPage } from '../Order/order';
import { addressPage } from '../addressbook/address';
import { creditPage } from '../credit/credit';
import { changepasswordPage } from '../changepassword/changepassword';  
import { wishlistPage } from '../wishlist/wishlist';

@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html'
})

export class DashboardPage {
	dashboardList:any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
        this.dashboardList = [
            {title:'MY PROFILE', component:profilePage},
            {title:'My ORDERS', component:orderPage},
            {title:'My ADDRESS BOOK', component:addressPage},
            {title:'My WISH LIST', component:wishlistPage},
            {title:'My CREDIT', component:creditPage},
            {title:'CHANGE PASSWORD', component:changepasswordPage},
            {title:'LOG OUT', component:''}
        ];
    }

    ionViewDidLoad() {
    	console.log('ionViewDidLoad ContactPage');
  	}

  	openprofielModal(value) {
    	this.navCtrl.push(value);
        // let profileModal = this.modalCtrl.create(value);
	    // profileModal.present();
  	}

}