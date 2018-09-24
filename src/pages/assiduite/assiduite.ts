import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the AssiduitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assiduite',
  templateUrl: 'assiduite.html',
})
export class AssiduitePage {

 /* constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssiduitePage');
  }

}*/

constructor(public navCtrl: NavController, public localNotifications: LocalNotifications) {

}

singlenotification(){
  this.localNotifications.schedule({
    id: 1,
    text: 'Single ILocalNotification',
    icon: 'http://codesolution.co.in/assets/images/code/codeicon.png'
  });

}
multiplenotification(){
  this.localNotifications.schedule([{
     id: 1,
     text: 'Multi ILocalNotification 1',
     icon: 'http://codesolution.co.in/assets/images/code/codeicon.png'
    },{
     id: 2,
     title: 'Local ILocalNotification Example',
     text: 'Multi ILocalNotification 2',
     icon: 'http://codesolution.co.in/assets/images/code/codeicon.png'
  }]);
}

delayednotification(){
  this.localNotifications.schedule({
     text: 'Delayed ILocalNotification',
     trigger: {at: new Date(new Date().getTime() + 3600)},
     led: 'FF0000',
     sound: null,
     icon: 'http://codesolution.co.in/assets/images/code/codeicon.png'
  });
}
}
