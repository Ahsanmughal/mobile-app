import { Component, ViewChild,OnInit } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
// import { ListPage } from '../pages/list/list';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SigninPage} from '../pages/signin/signin';
import { SignupPage} from '../pages/signup/signup';
import { ProductlistPage } from '../pages/productlisting/productslisting';
import { tcpage } from '../pages/termsandcondition/termsandcondition';

import { CategoryListingService } from '../pages/services/categories-listing-service.service';

@Component({
    templateUrl: 'app.html',
    providers:[CategoryListingService]
})

export class MyApp implements OnInit {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = TutorialPage;
    // pages: Array<{title: string, component: any}>;
    //categories: Array<{title: string, component: any}>;
    categories:any;
    mainnav:any;
    cate:any;

    userinfo:{};
    user_flag:string;

    showLevel1 = null;
    showLevel2 = null;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        private CLS:CategoryListingService,
        private storage: Storage,
        public events: Events
    ) {
        this.initializeApp();
        events.subscribe('user:created', (user) => {
            if(user){
                this.userinfo = user;
            }
            else{
                this.user_flag = 'Guest';
            }
        });
    }


    loadCategories(){
        this.CLS.getcategorieslisting().subscribe(data => {
            if ( data ) {
                this.cate = data.children_data;
            }
        }, err => console.log('error'));
    }


    getParentValues(parent, child, sub_child,sub_name) {
        this.nav.push(ProductlistPage , {parent:parent,child:child,sub_child:sub_child,name:sub_name});
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });


    }

    gototc(page){this.nav.push(tcpage); }
    homePage(){this.nav.setRoot(TabsPage); }
    signupPage(){this.nav.setRoot(SignupPage); }
    signinPage(){this.nav.push(SigninPage); }


    toggleLevel1(idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        } else {
            this.showLevel1 = idx;
        }    
    }

    toggleLevel2(idx) {
        if (this.isLevel2Shown(idx)) {
            this.showLevel1 = null;
            this.showLevel2 = null;
        } else {
            this.showLevel1 = idx;
            this.showLevel2 = idx;
        }
    }

    isLevel1Shown(idx) {
        return this.showLevel1 === idx;
    }

    isLevel2Shown(idx) {
        return this.showLevel2 === idx;
    };

    logout(){
        this.storage.remove('Authorization');
        this.storage.remove('customer');
        console.log('log out successfully');
    }

    ngOnInit() {
        this.loadCategories();
        // this.getuserInfoStorage();
    }
}
