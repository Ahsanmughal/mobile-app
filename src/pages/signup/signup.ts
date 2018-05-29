import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SigninPage } from '../signin/signin';
import { SignupService } from '../services/signup-service.service';

@Component({
	selector: 'page-signup',
	templateUrl:'signup.html',
	styleUrls: ['/pages/signup/signup.scss'],
	providers: [ SignupService ]
})
export class SignupPage implements OnInit {	

	signupform: FormGroup;
  	registerform = { 
		customer:{firstname: '',lastname: '',email:''},
		password:''
	};

	constructor(public nav: NavController,private alertCtrl: AlertController, private signupserv:SignupService)  {}

	ngOnInit() {
    	let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    	this.signupform = new FormGroup({
    		firstname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2), Validators.maxLength(20)]),
    		lastname: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2), Validators.maxLength(20)]),
      		email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      		password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
	    });
  	}

	gotosignin() {
		this.nav.setRoot(SigninPage);
  	}

  	signup(){  		
  		this.signupserv.registerUser(this.registerform).subscribe(
  			data => {
  				if(data){
  					this.nav.setRoot(SigninPage);
  					console.log(data);
  				}
  			},
  			err =>{
  				if(err){
  					this.showpopup(err);
	  				console.log(err);
  				}
  			}
  		)
  	}

	showpopup(text){
		let alert = this.alertCtrl.create({
			subTitle:text.message,
			buttons: [
 		    	{ text: 'Cancel',role: 'cancel',handler: () => { console.log('Cancel clicked'); } }
    		]
		})
		alert.present();
	}

}