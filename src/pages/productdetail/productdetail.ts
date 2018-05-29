import { Component, OnInit } from '@angular/core';
import { NavController,ModalController,NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SizevariantPage } from '../variants/sizevariant/sizevariants';
import { ColorvariantPage } from '../variants/colorvariant/colorvariants';
import { CartPage } from '../cart/cart';
import { ProductListingService } from '../services/product-listing-service.service';
import { CartManagementService } from '../services/cart-service.service';

@Component({
	selector:'page-productdetail',
	templateUrl:'productdetail.html',
	styleUrls:['/pages/productdetail/productdetail.scss'],
	providers:[ProductListingService,CartManagementService]
})

export class productdetailPage implements OnInit{
	
	productdetail:any = {};
	pageparams:any = {};
	product_images = [];
	shownGroup = null;
	specs = null;
	productDesc : any;
	productqty:number = 1;
	arrCart:any;

	sizes : any;
	sizetext = 'Select Size';
	selectedsku : any;
	size_varirant_flage:boolean;

	colors:any;
	colortext = 'Select Color';
	color_size_variant_flag:boolean;

	color_flag:boolean;
	
	inStock:any;
	inStock_flag:boolean;

	mySlideOptions = {
    	pager:true
  	};


	
	constructor(
		public navCtrl: NavController,
		public modalCtrl: ModalController,
		public navParams: NavParams,
		private PLS: ProductListingService,
		private storage: Storage,
		private CMS:CartManagementService
	)
	{
		this.pageparams = this.navParams.data;
		this.size_varirant_flage = false;
		this.color_size_variant_flag = false;
		this.inStock_flag = false;
	}

	/*******************get productdetail *************/
	loadProduct(sku){
		this.PLS.getproductDetail(sku).subscribe(data => {
			if(data){
				this.product_images = data.results.product_otherimages.split(",")
				this.productdetail = data.results;
				this.productDesc = data.results.description;
				if(data.results.productFlag == "size_variant"){
					this.size_varirant_flage = true;
					this.sizes = data.results.sizes;
				}else if(data.results.productFlag == 'color_size_variant'){
					this.color_size_variant_flag = true;
					this.colors = data.results._color_object.colors;
				}
				else if(data.results.productFlag == 'color_variant'){
					this.color_flag = true;
					this.colors = data.results.color_array;
				}
				// if(data.results._color_object.colors){
				// 	this._color = data.results._color_object.colors;
				// }
			}
		})
	}



	toggleGroup(group) {
    	if (this.isGroupShown(group)) {this.shownGroup = null; }
    	else {this.shownGroup = group; }
	};
	
	isGroupShown(group) {
    	return this.shownGroup === group;
	};

	specstoggle(group) {
    	if (this.specsShown(group)) {this.specs = null; } 
    	else {this.specs = group; }
	};

	specsShown(group) {
    	return this.specs === group;
	};

	opensize() {
		let sizeModal = this.modalCtrl.create(SizevariantPage, {size:this.sizes, sku: this.productdetail.sku});
    	sizeModal.present();

    	sizeModal.onDidDismiss(data => {
    		this.productdetail.sku = data.size.sku;
    		this.productdetail.price = data.size.price;
    		this.productdetail.special_price = data.size.special_price;
    		this.sizetext = data.size.label;
    		this.inStock_flag = true;
    		if(data.size.isInStock == 1){
    			this.inStock = ' In Stock';
    		}else{
    			this.inStock = 'Out Of Stock';
    		}
        });
	}

	opencolor(){
		let colorModal = this.modalCtrl.create(ColorvariantPage , {colors:this.colors, s_color:this.colortext});
		colorModal.present();

		colorModal.onDidDismiss(data => {
			if(data.selectedsizes.size){
				this.sizes = data.selectedsizes.size;
				this.sizetext ='Select Size';
			}else{
				this.productdetail.sku = data.selectedsizes.sku;
			}
			this.product_images = data.selectedsizes.product_otherimages.split(",");
			this.colortext = data.selectedsizes.label;
		})
	}
	

	gotocart(){
		this.getcartid();
	}

	async getlocalguestCartId(){
		let value = await  this.storage.get('guestCartId').then((val) => val);
		//	console.log(value);
		 this.getValue(value);
	}

	getValue(val) {

	 return val; 
	}	
	
	getcartid(){
		
		// if(this.gls.getlocaluserauth() == undefined || this.gls.getlocaluserauth() == null){
		// 	console.log(this.gls.getlocalguestCartId());
		// 	// if(this.gls.getlocalguestCartId() == undefined || this.gls.getlocalguestCartId() == null){
		// 	// 	this.CMS.getcartID().subscribe(data =>{
		//  //            this.storage.set('guestCartId',data);
  //  //      		    this.cartObj(data);
  //  //              })
		// 	// }
		// 	// else{
		// 	// 	console.log('guestCartId()',this.gls.getlocalguestCartId());
		// 	// 	this.cartObj(this.gls.getlocalguestCartId());
		// 	// }
		// }else{
		// 	this.cartObj(this.gls.getlocaluserauth());
		// }

		this.storage.get('Authorization').then((val) =>{
			if(val == undefined || val == null){
				this.storage.get('guestCartId').then((val) =>{
            		if(val == undefined || val == null){
                		this.CMS.getcartID().subscribe(data =>{
		                	this.storage.set('guestCartId',data);
        		        	this.cartObj(data);
                		})
		            }
        		    else{
            			this.cartObj(val)
		            }
		        })
			}else{
				this.cartObj(val)
			}
		})
    }

	cartObj(gcid){
		this.arrCart = {
			"cartItem":{
				"sku":this.productdetail.sku,
				"qty":this.productqty,
				"quoteId": gcid,
				"product_option":{
					"extension_attributes":{
						"configurable_item_options":[]
					}
				},
				"extension_attributes":[]
			}
		}
		this.navCtrl.push(CartPage, {arrcart: this.arrCart, gid:gcid});
	}

	ngOnInit() {
		// this.loadProduct(this.pageparams.sku);
		// let num = 'MS-AAD-AB0638';
		this.loadProduct('MS-AAD-AB0638');
    }    
}