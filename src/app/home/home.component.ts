import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Rx';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterDate: any;
  listRooms: any = [];
  filterRoom: string;
  inscription: Subscription;
  
  materializeParams = [{ 
    min: new Date(),
    closeOnSelect: true,
    onSet: function(e) {
      if (e.select) {
        this.filterDate = new Date(e.select);
      }
    }
  }];
  

  constructor(
      private homeService: HomeService,
      private route: ActivatedRoute
    ) { 
      
      this.filterDate = new Date();
  }


  ngOnInit() {
    this.inscription = this.route.queryParams.subscribe( (queryParams: any) => {
      if (queryParams.date) {
        this.filterDate = new Date( parseInt(queryParams['date']) );
      }
    });
    
    this.onSearch();
  }


  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
  
  onSearch() {
    this.homeService.getRooms( { date: new Date(this.filterDate).getTime() } )
      .subscribe(dados => {
        this.listRooms = dados;
      });
  }
  
  getRoomList() {
    if (this.listRooms.length === 0 || this.filterRoom === undefined || this.filterRoom.trim() === '') {
      return this.listRooms;
    }

    return this.listRooms.filter(
       v => v.name.toLocaleLowerCase().includes(this.filterRoom.toLocaleLowerCase())
    );
  }
}
