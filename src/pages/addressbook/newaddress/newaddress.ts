import { Component } from '@angular/core';

@Component({
	selector:'page-newaddress',
	templateUrl:'newaddress.html',
	styleUrls:['/pages/addressbook/newaddress/newaddress.scss']
})

export class newaddressPage {
	newaddress = {
		addressname:'',
		firstname:'',
		lastname:'',
		country:"uae",
		city:"dubai",
		area:"impz",
		streetname:'',
		buildingname:'',
		mbnumber:''
	}

	constructor() {}
}
