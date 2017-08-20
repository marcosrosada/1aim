import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { NouisliderModule } from 'ng2-nouislider';

import { AppRouting } from './app.routing';
import { HomeService } from './home/home.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { FilterLocationPipe } from './shared/filter-location.pipe';
import { FilterCapacityPipe } from './shared/filter-capacity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RoomComponent,
    RoomDetailsComponent,
    FilterLocationPipe,
    FilterCapacityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    NouisliderModule,
    AppRouting
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
