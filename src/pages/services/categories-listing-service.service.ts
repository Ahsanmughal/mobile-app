import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CategoryListingService{
	constructor(private http: Http) { }
	getcategorieslisting(){
		return this.http.get('https://ocs.menamall.com/rest/V1/categories/').map(resp => resp.json())
		.catch((error:any) => Observable.throw(error.json()));
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