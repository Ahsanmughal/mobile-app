import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderProvider {

    constructor(public loadingCtrl: LoadingController) {}
    loading: any = this.loadingCtrl.create({
        content: "Please wait..."
    })

    show() {
        this.loading.present();
    }

    hide() {
        this.loading.dismiss();
    }
}