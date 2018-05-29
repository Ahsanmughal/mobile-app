import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CheckoutPage } from '../checkout/checkout';
import { SigninPage } from '../signin/signin';
import { CartManagementService } from '../services/cart-service.service';

@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
	styleUrls:['/pages/cart/carts.scss'],
	providers:[CartManagementService]
})

export class CartPage {
	quantity :any;
	cartlist :any;
	pageparams:any;
	gid:any;
    cart_flag:boolean;
    cart_total:{};

	constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private CMS:CartManagementService,
        private storage: Storage
    ) {}

  	ionViewDidLoad() {
        this.storage.get('Authorization').then((val) =>{
            if(val == undefined || val == null){
                this.cart_flag = false;
                console.log('1');
            }
            else{
                this.cartdetails_total();
            }
        })

  	}

    cartdetails_total(){
        // arrcart => json object receiving in params
        // gid => user authentication or customer id receiving in params
        if(this.navParams.data.arrcart || this.navParams.data.gid){
            this.pageparams = this.navParams.data.arrcart;
            this.gid = this.navParams.data.gid;
            
            this.CMS.usercartDetails(this.gid, this.pageparams).subscribe(
                data => {
                    this.cart_flag = true;
                    console.log('2');
                    this.cartlist = data;
                    this.quantity = data.qty;
                },
                err =>{
                    console.log('err',err);
                }
            )

            // this.CMS.getcartTotal(this.gid).subscribe(
            //     data =>{
            //         this.cart_total = data;
            //     },
            //     err =>{
            //         console.log('err',err);
            //     }
            // )
        }
        else{
            this.cart_flag = false;
            console.log('3');
        }
    }


    gotopayment(){
        this.storage.get('Authorization').then((val) =>{
            if(val == undefined || val == null){
                this.navCtrl.push(SigninPage);
            }
            else{

            }
        })        
    }

  	// gotocart(){
  	// 	this.navCtrl.push(CheckoutPage);
  	// }
}