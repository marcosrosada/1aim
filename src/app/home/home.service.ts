import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }


  getRooms(searchDate:any) {
    this.http.post('https://challenges.1aim.com/roombooking/getrooms', JSON.stringify({ date: searchDate }))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
      });
  }

}
