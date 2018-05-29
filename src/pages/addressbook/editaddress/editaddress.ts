import { Component } from '@angular/core';

@Component({
	selector:'page-editaddress',
	templateUrl:'editaddress.html',
	styleUrls:['/pages/addressbook/editaddress/editaddress.scss']
})

export class editaddresspage {	
	editaddress = {addressname:'', firstname:'', lastname:'', country:"uae", city:"dubai", area:"impz", streetname:'', buildingname:'', mbnumber:''}
	constructor() {};
}