import { Component } from '@angular/core';
import { ViewController,ModalController,NavParams} from 'ionic-angular';


@Component({
	selector:'page-filtermodal',
	templateUrl:'filtermodal.html',
	styleUrls: ['/pages/filtermodal/filtermodal.scss'],
})

export class FiltermodalPage {

	filterlisting:any;
  	shownGroup = null;
  	filterbrands:any = [];
  	categories:any;
  	types:any;
  	colors:any;
  	brand:any;

	constructor(public viewCtrl:ViewController, public modalCtrl: ModalController, public navParams: NavParams) {
		this.filterlisting = this.navParams.data.filters;
		if(this.navParams.data.categories != undefined){
			this.categories = this.navParams.data.categories;
		}
		if(this.navParams.data.types != undefined){
			this.types = this.navParams.data.types;
		}
		if(this.navParams.data.colors != undefined){
			this.colors = this.navParams.data.colors;
		}
		if(this.navParams.data.brand != undefined){
			this.brand = this.navParams.data.brand;
		}

		for (let key  in this.filterlisting.brands) {
			this.filterbrands.push(this.filterlisting.brands[key])
		}
	}

	closeModal(){
		// console.log('categories',this.categories);
		this.viewCtrl.dismiss({categories:this.categories, types:this.types, colors:this.colors, brand:this.brand});
	}

	refresh(){
		this.viewCtrl.dismiss({categories:'', types:'', colors:'', brand:''});	
	}

	// selectfilter(value){
	//  let filterModal = this.modalCtrl.create(value);
 	//  filterModal.present();
	// }
}