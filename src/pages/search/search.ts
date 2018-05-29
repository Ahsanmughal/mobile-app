import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	searchTerm: string = '';
    items: any;
  	constructor(public navCtrl: NavController , public dataService: Data) {
    
  	}

  	 ionViewDidLoad() {
        this.setFilteredItems();
    }

    setFilteredItems() {
       this.items = this.dataService.filterItems(this.searchTerm);
    }

}
