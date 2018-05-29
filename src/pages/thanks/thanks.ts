import {Component} from '@angular/core';

@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
  styleUrls: ['/pages/thanks/thanks.scss']
})


export class ThanksPage {
	constructor(){}

	openPage() {
 		console.log('redirect to home page')
    }
}


