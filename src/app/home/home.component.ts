import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterDate: Date = null;
  listRooms: any = [];
  materializeParams = [{ 
    min: new Date(),
    closeOnSelect: true
    // onSet: function (e) {
    //   if (e.select) {
    //     //this.listRooms = [];
    //   }
    // }
  }];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }
  
  onSearch() {
    this.homeService.getRooms( { date: new Date(this.filterDate).getTime() } )
      .subscribe(dados => {
        this.listRooms = dados;
      });
  }
}
