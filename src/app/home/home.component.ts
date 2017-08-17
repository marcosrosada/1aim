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
  inscription: Subscription;
  
  materializeParams = [{ 
    min: new Date(),
    closeOnSelect: true
    //onSet: function (e) {
    //   if (e.select) {
    //     //this.listRooms = [];
    //   }
    //}
  }];

  constructor(
      private homeService: HomeService,
      private route: ActivatedRoute
    ) { 
      
      this.filterDate = new Date();
  }

  ngOnInit() {
    this.inscription = this.route.queryParams.subscribe( (queryParams: any) => {
      console.log(queryParams.date)
      if (queryParams.date)
        this.filterDate = new Date( parseInt(queryParams['date']) );
    });
    
    this.onSearch();
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
  
  onSearch() {
    console.log(this.filterDate);
    console.log('new Date', new Date(this.filterDate));
    console.log("getTime()", new Date(this.filterDate).getTime());
    this.homeService.getRooms( { date: new Date(this.filterDate).getTime() } )
      .subscribe(dados => {
        this.listRooms = dados;
      });
  }
}
