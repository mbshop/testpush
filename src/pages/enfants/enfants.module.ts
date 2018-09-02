import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnfantsPage } from './enfants';

@NgModule({
  declarations: [
    EnfantsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnfantsPage),
  ],
})
export class EnfantsPageModule {}
