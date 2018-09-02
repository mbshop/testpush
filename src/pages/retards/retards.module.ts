import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetardsPage } from './retards';

@NgModule({
  declarations: [
    RetardsPage,
  ],
  imports: [
    IonicPageModule.forChild(RetardsPage),
  ],
})
export class RetardsPageModule {}
