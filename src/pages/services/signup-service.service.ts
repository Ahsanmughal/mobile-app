import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SignupService{
	constructor(private http:Http){}

	/************** New User **************/

	registerUser(data){
		// let values = new FormData();//, headers = new Headers();
  //       values.append('customer',data);
		console.log('data',data);
		return this.http.post('http://ocs.menamall.com/rest/V1/customers',data).map(data => data.json()).catch((error:any) => Observable.throw(error.json()))
	}
}
