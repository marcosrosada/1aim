import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { NouisliderModule } from 'ng2-nouislider';

import { HomeComponent } from './home.component';
import { RoomComponent } from '../room/room.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    NouisliderModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    RoomComponent
  ]
})
export class HomeModule { }
