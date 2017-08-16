import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private filterDate: Date = null;
  
  private materializeParams = {
    min: new Date(),
    closeOnSelect: true
  };

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }
  
  onGetRooms() {
    this.homeService.getRooms( { date: new Date(this.filterDate).getTime() } );
  }

}
