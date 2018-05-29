import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { newaddressPage } from './newaddress/newaddress'; 
import { editaddresspage } from './editaddress/editaddress';

@Component({
	selector:'page-address',
	templateUrl:'address.html',
	styleUrls:['/pages/addressbook/address.scss']
})

export class addressPage {

	addresslist:any;
	checked : boolean = true;
	constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
		this.addresslist = [
			{
				firstname:"Shyju", lastname:"Kuyiloor Kavil", addressline1:"Al Marsa Street, Marina Plaza", addressline2:"Suite 3502", country:"United Arab Emirates", city:"Dubai",
				mobile:{ccode:"+971", mcode:"52", number:"7654321"}
			},
			{
				firstname:"Ahsan", lastname:"Mustafa", addressline1:"Al Marsa Street, Marina Plaza", addressline2:"Suite 3502", country:"United Arab Emirates", city:"Dubai",
				mobile:{ccode:"+971", mcode:"52", number:"8727140"}
			},
			{
				firstname:"Amine", lastname:"Mahmat", addressline1:"Al Marsa Street, Marina Plaza", addressline2:"Suite 3502", country:"United Arab Emirates", city:"Dubai",
				mobile:{ccode:"+971", mcode:"52", number:"1234567"}
			},
			{
				firstname:"Mustafa", lastname:"Wahbi", addressline1:"Al Marsa Street, Marina Plaza", addressline2:"Suite 3502", country:"United Arab Emirates", city:"Dubai",
				mobile:{ccode:"+971", mcode:"52", number:"1234567"}
			},
			{
				firstname:"Shahzaib", lastname:"Arshad", addressline1:"Al Marsa Street, Marina Plaza", addressline2:"Suite 3502", country:"United Arab Emirates", city:"Dubai",
				mobile:{ccode:"+971", mcode:"52", number:"1234567"}
			},
			{
				firstname:"Usama", lastname:"Habib", addressline1:"Al Marsa Street, Marina Plaza", addressline2:"Suite 3502", country:"United Arab Emirates", city:"Dubai",
				mobile:{ccode:"+971", mcode:"52", number:"1234567"}
			}
		]
	}

	newadd(){
		this.navCtrl.push(newaddressPage);
	}
	editadd(){
		this.navCtrl.push(editaddresspage);
	}

	presentConfirm() {
  		let alert = this.alertCtrl.create({
    		title: 'Delete Address',
   			message: 'Do you want to delete this address?',
		    buttons: [
      			{	text: 'Cancel', role: 'cancel', handler: () => {console.log('Cancel clicked'); }},
			    {	text: 'Delete', handler: () => {console.log('Delete clicked'); } }
		    ]
  		});
		alert.present();
	}

}
