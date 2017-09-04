import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  roomId: string;
  inscription: Subscription;

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }
  
  
  ngOnInit() {
    this.inscription = this.route.queryParams.subscribe( (queryParams: any) => {
        this.roomId = queryParams['roomId'];
    });
  }


  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
