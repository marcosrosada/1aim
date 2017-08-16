import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private filterDate: Date = null;
  private listRooms: any = [];
  
  private materializeParams = {
    min: new Date(),
    closeOnSelect: true,
    setValue: ''
  };

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }
  
  onGetRooms() {
    this.homeService.getRooms( { date: new Date(this.filterDate).getTime() } )
      .subscribe(dados => {
        this.listRooms = dados;
      });
  }

}
