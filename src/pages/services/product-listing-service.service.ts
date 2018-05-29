import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductListingService{
	constructor(private http: Http) { }
	getproductslisting(count,page,parent,child,sub_child,brand,categories,colors,types){
		let urlSearchParams = new URLSearchParams();
    		urlSearchParams.append('count', count);
		    urlSearchParams.append('page', page);
    		urlSearchParams.append('parent_category', parent);
    		urlSearchParams.append('level1_category', child);
    		urlSearchParams.append('level2_category', sub_child);
    		if(brand != undefined){
    			urlSearchParams.append('brand', brand);
    		}
    		if(categories != undefined){
    			urlSearchParams.append('category',categories);
    		}
    		if(colors != undefined){
    			urlSearchParams.append('color',colors);
    		}
    		if( types != undefined){
    			urlSearchParams.append('type',types);
    		}
		
			// return this.http.get('http://solrsearch.tools.kskdigital.com/IO_listing.php?'+urlSearchParams , null).map(resp => resp.json())
			// .catch((error:any) => Observable.throw(error.json()));

			return this.http.get('http://solrsearch-dev.tools.kskdigital.com/IO_listing.php?'+urlSearchParams , null).map(resp => resp.json())
			.catch((error:any) => Observable.throw(error.json()));
		}

	getproductDetail(sku){
		let productparams = new URLSearchParams();
		productparams.append('singleView',sku);

		return this.http.get('http://ocs.menamall.com/restapis?'+productparams+'&ncr=1',null).map(resp => resp.json())
		.catch((error:any) => Observable.throw(error.json()));
	}

	getupdatevalues(data){
		let values = new FormData();//, headers = new Headers();
            values.append('getQuantity',data);
		return this.http.post('http://ocs.menamall.com/restapis', values).map( data => data.json()).catch((error:any) => Observable.throw(error.json()) )
	}
}



// getDummy() {
//   return this.http.get('//api.jsonbin.io/b/5a894061a121bc097fe6c31b').map(resp => resp.json())
//   .catch((error: any) => Observable.throw(error.json()));
// }

//getCategories(): Observable<any[]> {
// 	return this.http.get(this.CATEGORY_PATH).map(resp => resp.json().categories)
//  .catch((error: any) => Observable.throw(error.json()));
//}