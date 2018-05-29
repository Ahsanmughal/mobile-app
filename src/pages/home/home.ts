import { Component,ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { productdetailPage } from '../productdetail/productdetail'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    styleUrls: ['/pages/home/home.scss']
})

export class HomePage {
	@ViewChild(Slides) slides:Slides;

  	constructor(public navCtrl: NavController) {

  	}

  	goToSlide() {
        this.slides.slideTo(2, 500);
    }

  	slideChanged() {
        // let currentIndex = this.slides.getActiveIndex();
    }

    homeData = [
        {title:'women', url:'assets/imgs/personal-care.png'},
        {title:'men', url:'assets/imgs/camera.png'},
        {title:'sun care', url:'assets/imgs/baby_toys.png'},
        {title:'makeup', url:'assets/imgs/makeup.png'},
        {title:'mobile', url:'assets/imgs/mobile.png'},
        {title:'grooming', url:'assets/imgs/grooming-2.png'}
    ]


    gotoproddetail(){
        this.navCtrl.push(productdetailPage);     
    }
}
