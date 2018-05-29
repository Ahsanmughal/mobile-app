import { Component, OnInit } from '@angular/core';
import { NavController,ModalController,NavParams,LoadingController  } from 'ionic-angular';
import { SortmodalPage } from '../sortmodal/sortmodal';
import { FiltermodalPage } from '../filtermodal/filtermodal';
import { productdetailPage } from '../productdetail/productdetail';
import { ProductListingService } from '../services/product-listing-service.service';

@Component({
    selector: 'page-productlist',
	templateUrl:'productslisting.html',
    styleUrls: ['/pages/productlisting/productlisting.scss'],
    providers:[ProductListingService]
})

export class ProductlistPage implements OnInit {
    products: any = [];
    pageparams:any;
    count = 24;
    page = 1;
    loading:boolean;
    filters:any;
    brand:any;
    categories:any;
    colors:any;
    types:any;

	constructor(public navCtrl: NavController,public modalCtrl: ModalController,public navParams: NavParams, private PLS: ProductListingService, public loadingCtrl: LoadingController) {
        this.pageparams = this.navParams.data;
    }

    /*******************get productlisting *************/
    loadProducts(count,page,parent,child,sub_child,brand,categories,colors,types) {
        this.PLS.getproductslisting(count,page,parent,child,sub_child,brand,categories,colors,types).subscribe(data => {
            if (data) {
                let resp = data.result;
                this.filters = data.products.filters;
                if(resp){
                    this.products = this.products.concat(resp);
                    this.loading = true;
                }else{
                    this.loading = false;
                }
            }
        }, err => console.log('error'));
    }

	opensortModal() {
        let sortModal = this.modalCtrl.create(SortmodalPage);
        sortModal.present();
    }

    openfilterModal(){
  	    let filterModal = this.modalCtrl.create(FiltermodalPage, {filters : this.filters, brand:this.brand, categories:this.categories, colors:this.colors, types:this.types });
  	    filterModal.present();

        filterModal.onDidDismiss(data => {
            if( data.brand != undefined){this.brand = data.brand; }
            if(data.categories != undefined){this.categories = data.categories; }
            if(data.colors != undefined){this.colors = data.colors; }
            if(data.types != undefined){this.types = data.types;}

            if(data.brand != undefined || data.categories != undefined || data.colors != undefined || data.types != undefined) {
                this.products = [];
                this.page = 1;
                this.loadProducts(this.count, this.page, this.pageparams.parent, this.pageparams.child, this.pageparams.sub_child, this.brand, this.categories, this.colors, this.types );
            }
        });
    }

    productwishbtn(pid){
        console.log('pid', pid);
    }

    gotopd(sku){
        this.navCtrl.push(productdetailPage, {sku:sku});
    }

    presentLoadingCustom() {
        let loading = this.loadingCtrl.create({content: `<ion-spinner icon="circles"></ion-spinner>`, duration: 5000 });
        loading.onDidDismiss(() => { console.log('Dismissed loading'); });
        loading.present();
    }

    ngOnInit() {
        this.presentLoadingCustom();
        this.loadProducts(this.count,this.page, this.pageparams.parent,this.pageparams.child,this.pageparams.sub_child,this.brand, this.categories, this.colors, this.types);
    }


    doInfinite(infiniteScroll) {
        this.page = this.page+1;
        setTimeout(() => {
            this.loadProducts(this.count,this.page, this.pageparams.parent,this.pageparams.child,this.pageparams.sub_child,this.brand, this.categories, this.colors, this.types);
            infiniteScroll.complete();
        }, 500);
    }
}


// ionViewLoaded() {
//     let loader = this.loading.create({
//         content: 'Getting latest entries...',
//     });
    
//     loader.present().then(() => {
//         this.someService.getLatestEntries().subscribe(res => {
//             this.latestEntries = res;
//         });
//         loader.dismiss();
//     });
// }