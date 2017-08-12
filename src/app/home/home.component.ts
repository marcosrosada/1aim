import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    margin: 1,
    limit: 5, // NOTE: overwritten by [limit]="10"
    range: {
      min: 7,
      max: 19
    },
    pips: {
      mode: 'steps',
      density: 5
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
