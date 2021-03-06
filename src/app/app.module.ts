import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{LocalNotifications} from '@ionic-native/local-notifications'

import { LoginPage } from '../pages/login/login';
import { EnfantsPage } from '../pages/enfants/enfants';
import { ProfilePage } from '../pages/profile/profile';
import { NotesPage } from '../pages/notes/notes';
import { AssiduitePage } from '../pages/assiduite/assiduite';
import { AbsencesPage } from '../pages/absences/absences';
import { RetardsPage } from '../pages/retards/retards';
//import { TestNotPage } from '../pages/test-not/test-not';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    EnfantsPage,
    ProfilePage,
    NotesPage,
    AssiduitePage,
    AbsencesPage,
    RetardsPage,
    //TestNotPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    EnfantsPage,
    ProfilePage,
    NotesPage,
    AssiduitePage,
    AbsencesPage,
    RetardsPage,
    //TestNotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
