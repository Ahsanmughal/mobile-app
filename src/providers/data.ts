import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    items: any;
 
    constructor(public http: Http) {
 
        this.items = [
            {title: 'NOKIA Mobile 3 Dual SIM 16GB 4G White'}, {title: 'NOKIA Mobile- NK-150- 1020 mAh- Dual SIM- 2G- Black'}, {title: 'NOKIA mobile 105 Dual SIM 2G Black'}, {title: 'NOKIA mobile NK11E1MBW1A02 2 Dual SIM 8GB 4G Blacl'},
            {title: 'Nokia 5 Dual SIM 16GB 4G Black'}, {title: 'Nokia 5 Dual SIM 16GB 4G Blue'},{title: 'Nokia 5 Dual SIM Matte Black 16GB 4G Matte Black'},{title: 'Nokia 5 Dual SIM 16GB 4G Tempered Blue'},
            {title: 'Nokia 5 Dual SIM 16GB 4G'},{title: 'Nokia 8 Dual SIM 64GB 4G LTE - Steel'}
        ]
    }
 
    filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }
 
}