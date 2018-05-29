import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import { AccordionModule } from "ngx-accordion";
import { IonicStorageModule } from '@ionic/storage';

import { SearchPage } from '../pages/search/search';
import { DashboardPage} from '../pages/dashboard/dashboard';
import { CartPage} from '../pages/cart/cart';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { SortmodalPage } from '../pages/sortmodal/sortmodal';
import { FiltermodalPage } from '../pages/filtermodal/filtermodal';
import { ProductlistPage } from '../pages/productlisting/productslisting';
import { CategoryfilterPage } from '../pages/filters/categoriesfilter/categoriesfilter'
import { TypefilterPage } from '../pages/filters/producttypefilter/producttypefilter'
import { GenderfilterPager } from '../pages/filters/genderfilter/genderfilter';
import { TruncatePipe } from '../pages/pipe/truncatepipe/truncatepipe';
import { KeysPipe } from '../pages/pipe/keyspipe/keyspipe';
import { ObjNgFor } from '../pages/pipe/objngfor/objngfor';
import { ColorvariantPage } from '../pages/variants/colorvariant/colorvariants';
import { SizevariantPage } from '../pages/variants/sizevariant/sizevariants';
import { productdetailPage } from '../pages/productdetail/productdetail'
import { CheckoutPage } from '../pages/checkout/checkout';
import { promocodePage } from '../pages/promocode/promocode';
import { paymentPage } from '../pages/payment/payment';
import { Data } from '../providers/data';
import { ThanksPage } from '../pages/thanks/thanks';
import { profilePage} from '../pages/profile/profile';
import { orderPage} from '../pages/Order/order';
import { addressPage } from '../pages/addressbook/address';
import { creditPage } from '../pages/credit/credit';
import { changepasswordPage } from '../pages/changepassword/changepassword';
import { wishlistPage } from '../pages/wishlist/wishlist';
import { newaddressPage } from '../pages/addressbook/newaddress/newaddress';
import { editaddresspage } from '../pages/addressbook/editaddress/editaddress';
import { tcpage } from '../pages/termsandcondition/termsandcondition';
import {ForgetpasswordPage} from '../pages/forgetpassword/forgetpassword'

import { LoaderProvider } from '../pages/partials/loader';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        MyApp, HomePage, ListPage, TutorialPage, TabsPage, SearchPage, DashboardPage,CartPage,SignupPage,SigninPage,
        SortmodalPage,FiltermodalPage,ProductlistPage,CategoryfilterPage,TypefilterPage,GenderfilterPager,
        TruncatePipe,KeysPipe,ObjNgFor,productdetailPage,ColorvariantPage,SizevariantPage,CheckoutPage,promocodePage,paymentPage,ThanksPage,profilePage,orderPage,addressPage,creditPage,changepasswordPage,
        wishlistPage,newaddressPage,editaddresspage,tcpage,ForgetpasswordPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AccordionModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(MyApp,{
            tabsHideOnSubPages:false
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp, HomePage, ListPage, TutorialPage, TabsPage,SearchPage, DashboardPage,CartPage,SignupPage,SigninPage,
        SortmodalPage,FiltermodalPage,ProductlistPage,CategoryfilterPage,TypefilterPage,GenderfilterPager,
        productdetailPage,ColorvariantPage,SizevariantPage,CheckoutPage,promocodePage,paymentPage,ThanksPage,profilePage,orderPage,addressPage,creditPage,changepasswordPage,
        wishlistPage,newaddressPage,editaddresspage,tcpage,ForgetpasswordPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        LoaderProvider,
        Data,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
