import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }
  
  getRooms(date:any) {
    return this.http.post('https://challenges.1aim.com/roombooking/getrooms', date)
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
      });
  }
}
