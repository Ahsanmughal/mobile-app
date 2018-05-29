import { Component } from '@angular/core';
import { NavController,AlertController,Events } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword';
import { SignupPage } from '../signup/signup';
import { SigninService } from '../services/signin-service.service';
import { Storage } from '@ionic/storage';

@Component({
	selector:'page-signin',
	templateUrl:'signin.html',
	styleUrls:['/pages/signin/signin.scss'],
    providers:[SigninService]
})

export class SigninPage {

	signform = { username:'ahsan.mustafa@kskdigital.com', password:'ksk1234' };
    type = 'password';
    showPass = false;
    userAuth:any;
    authVal:any;

	constructor(
        public nav: NavController,
        public alertCtrl: AlertController,
        private signinServ:SigninService,
        private storage: Storage,
        public events: Events,
    ) {}

	signin(){
        this.signinServ.loginUser(this.signform).subscribe(
            data =>{
                if(data){
                    this.storage.set('Authorization','Bearer '+data);
                    setTimeout(()=>{ this.getuserAuth(); },1000);
                }
            },
            err =>{
                if(err){
                    this.showpopup(err);
                    console.log('err',err);
                }
            }
        )
  	}

    getuserAuth(){
        this.storage.get('Authorization').then((val) =>{
            if(val == undefined || val == null){
                console.log('no authorization');
            }
            else{
                this.signinServ.getUserDetail(val).subscribe(
                    data =>{
                        this.storage.set('customer',data);
                        this.createUser(data);
                        // this.nav.push(TabsPage);
                    },
                    err =>{
                        console.log('err',err);
                    }
                )
            }
        })
    }

  	gotoforget(){
  		this.nav.push(ForgetpasswordPage);
	}

    createUser(data) {
        this.events.publish('user:created', data);
        this.nav.pop();
        // this.nav.setRoot(TabsPage);
    }
 
  	showPassword() {
    	this.showPass = !this.showPass;
    	if(this.showPass){
      		this.type = 'text';
    	} else {
      		this.type = 'password';
    	}
    }

    gotoregister(){
    	this.nav.setRoot(SignupPage);
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
