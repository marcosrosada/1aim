import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';

const appRouter: Routes = [
    { path: '', component: HomeComponent },
    { path: 'room-details', component: RoomDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {}