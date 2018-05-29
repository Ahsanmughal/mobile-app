import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';

import { LoaderProvider } from '../partials/loader';

@Injectable()
export class SigninService{
	constructor(private http:Http, private loader: LoaderProvider){}
	
	/************** Signin User **************/
	loginUser(data){
		this.loader.show();
		return this.http.post('http://ocs.menamall.com/rest/V1/integration/customer/token',data)
			.map(data => data.json())
			.finally(() => { this.loader.hide(); })
			.catch((error:any) => Observable.throw(error.json()))
	}

	getUserDetail(data) {
   		let headers = new Headers({
     		'Content-Type': 'application/json',
     		'Authorization': data,     
		});
   		return this.http.get('http://ocs.menamall.com/rest/V1/customers/me', {headers: headers})
   		.map(res => res.json())
	}

	resetPassword(data){
		this.loader.show();
		return this.http.put('http://ocs.menamall.com/rest/V1/customers/password', data)
		.map(res => res.json())
		.finally(() => { this.loader.hide(); });
	}

}