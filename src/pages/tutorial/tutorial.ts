import {Component} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
// import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['/pages/tutorial/tutorial.scss']
})


export class TutorialPage {
	constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform){
	}

	startApp() {
		// this.navCtrl.setRoot(HomePage);
		this.navCtrl.setRoot(TabsPage, {}, {
	    	animate: true,
  			direction: 'forward'
		});
	}

	ionViewDidEnter() {
    	this.menu.enable(false);
	}

	ionViewWillLeave(){
		this.menu.enable(true);
	}
}


