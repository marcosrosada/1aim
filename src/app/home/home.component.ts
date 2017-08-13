import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  materializeParams = [{ 
    min: new Date(),
    selectYears: 15,
    closeOnSelect: true//,
    //format: 'dd/mm/yyyy'
  }];
  searchDate: string = '';

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
  }

  
  onSearch() {
    console.log(new Date(this.searchDate));
    this._homeService.getRooms(new Date(this.searchDate).getTime()/1000);
  }

}
