import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
import { SigninService } from '../services/signin-service.service';

@Component({
	selector:'page-forget',
	templateUrl:'forgetpassword.html',
	providers:[SigninService]
})
export class ForgetpasswordPage{
	forgetform = {
		email:'ahsan.mustafa@kskdigital.com',
		template:'email_reset',
		websiteId:1
	}

	constructor(public nav: NavController, private signinServ:SigninService,public alertCtrl: AlertController,){}

	submitforgetpasswordform(){
	    this.signinServ.resetPassword(this.forgetform).subscribe( 
	    	data =>{
	    		this.showpopup('An email is sent at your email address. Please check your inbox and follow the instructions.');
	    		this.nav.pop();
	        },
	        err =>{
	        	this.showpopup('Too many password reset requests. Please wait and try again or contact hello@example.com.');
	        	this.nav.pop();
	        }
	    )
	}

	showpopup(text){
        let alert = this.alertCtrl.create({
            subTitle:text,
            buttons: [
                 { text: 'Cancel',role: 'cancel',handler: () => { console.log('Cancel clicked'); } }
            ]
        })
        alert.present();
    }
}
