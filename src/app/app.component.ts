import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
//import { LoginPage } from '../pages/login/login';
import { EnfantsPage } from '../pages/enfants/enfants';
import { ProfilePage } from '../pages/profile/profile';
import { NotesPage } from '../pages/notes/notes';
import { AssiduitePage } from '../pages/assiduite/assiduite';
//import { TestNotPage } from '../pages/test-not/test-not';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation


    this.pages = [
      { title: 'Accueil', component: HomePage, active: true, icon: 'home'  },
      //{ title: 'List', component: ListPage },
      //{ title: 'Login', component: LoginPage },
      { title: 'Profile', component: ProfilePage , active: false, icon: 'contact' },
      { title: 'Enfants', component: EnfantsPage, active: false, icon: 'people'  },
      { title: 'Notes', component: NotesPage, active: false, icon: 'copy'  },
      { title: 'Assiduité', component: AssiduitePage, active: false, icon: 'archive'  },
      //{ title: 'Notifications', component: TestNotPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
