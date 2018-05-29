import {Injectable} from '@angular/core';
import {Http,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()

export class CartManagementService {
	
	constructor(private http:Http){}

	getcartID(){		
		return this.http.post('http://ocs.menamall.com/rest/V1/guest-carts', [])
		.map(data => data.json())
		.catch((error:any) => Observable.throw(
				error.json()
			)
		)
	}
	
	getcartDetails(cartid,data){
		return this.http.post('http://ocs.menamall.com/rest/V1/custom-guest-carts/'+cartid +'/items', data)
		.map(data => data.json())
		.catch((error:any) => Observable.throw(error.json()))
	}

	getcartTotal(cartid){
		return this.http.get('http://ocs.menamall.com/rest/V1/guest-carts/'+cartid+'/totals')
		.map(data => data.json())
		.catch((error:any) => Observable.throw(error.json()))
	}


	usercartDetails(auth,data){
		let headers = new Headers({
     		'Content-Type': 'application/json',
     		'Authorization': auth,     
		});
	    let options = new RequestOptions({ headers: headers });
		return this.http.post('http://ocs.menamall.com/rest/V1/carts/mine/items',data, options)
		.map(data => data.json())
		.catch((error:any) => Observable.throw(error.json()))

	}
}
