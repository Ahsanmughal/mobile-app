import {Component} from '@angular/core';

@Component({
	selector:'page-wishlist',
	templateUrl:'wishlist.html',
	styleUrls:['/pages/wishlist/wishlist.scss']
})

export class wishlistPage {
	
	wishlist:any;

	constructor() {
		this.wishlist = [
			{
        		title:'Robins Jean Flap Cotton Distress Jeans',
        		priceis:'539',
		        pricewas:'539',
		        product_id:"986204",
		        product_thumbimages:"https:\/\/ids-static.menamall.com\/MS-MJN-AB1341\/MS-MJN-AB1341-thumb.jpg",
		        color:{title:'red', value:0 }
		    },
		    {
        		title:'Brixton Buttoned Slim Fit Jeans',
		        priceis:'50',
		        pricewas:'520',
		        product_id:"986205",
        		product_thumbimages:"https://ids-static.menamall.com/MS-MJN-AB0760/MS-MJN-AB0760-thumb.jpg",
        		color:{title:'orange', value:1 }
	      	},
      		{
        		title:'Brixton Cotton Whiskered Slim Straight Jeans',
		        priceis:'305',
        		pricewas:'520',
        		product_id:"986206",
		        product_thumbimages:"https://ids-static.menamall.com/MS-MJN-AB0762/MS-MJN-AB0762-thumb.jpg",
		        color:{title:'black', value:2 }
		    } 
		]
	}
}