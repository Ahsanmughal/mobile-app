import { Component, OnInit } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { ProductListingService } from '../../services/product-listing-service.service';

@Component({
	templateUrl:'sizevariants.html',
	providers:[ProductListingService]
})

export class SizevariantPage implements OnInit{
	
	sizeList:any;
	skulist: any = [];
	selectedsize:any;

	constructor(public viewCtrl: ViewController, public navParams: NavParams, private PLS: ProductListingService) {
		this.sizeList = this.navParams.data.size;
		this.selectedsize = this.navParams.data.sku;
		// get all sku in skulist array
		for (let s of this.navParams.data.size) {
     	   this.skulist.push(s.sku);
		}
	}

	loadsku(){
		this.PLS.getupdatevalues(this.skulist).subscribe(data => {
			for(let size of this.sizeList){
				for(let resp of data.results){
					if(size.sku == resp.sku){
						size.price = resp.normal_price;
                        size.special_price = resp.sp_price;
                        size.sku = resp.sku;
                        size.isInStock = resp.stock_status;
					}
					// console.log(size.sku, resp.sku)
				}
			}
		});
	}


	closeModal(){
		this.viewCtrl.dismiss({size: this.selectedsize});
	}

	ngOnInit() {
		this.loadsku();
    }
    radioChecked(obj) {
    	this.selectedsize = obj;
    }
}