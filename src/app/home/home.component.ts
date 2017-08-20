import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  listCapacities: any = [];
  listRooms: any = [];
  filterCapacity:any = undefined;
  filterRoom: string;
  inscription: Subscription;
  
  materializeParams = [{ 
    min: new Date(),
    closeOnSelect: true
  }];
  

  constructor(
      private homeService: HomeService,
      private route: ActivatedRoute,
      private router: Router
    ) 
  { 
      
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
    let dateDTO = { date: new Date(this.filterDate).getTime() };
    
    this.homeService.getRooms( dateDTO )
      .subscribe(dados => {
        this.listRooms = dados;

        // this.router.navigate([], {
        //     queryParams: dateDTO
        // });
      
        this.listCapacities = dados.map( item => item.capacity);
        this.listCapacities.sort((a, b) => a - b);
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


  onChangeCapacity() {
    this.filterCapacity = this.filterCapacity === '' ? undefined : this.filterCapacity;
  }
}
