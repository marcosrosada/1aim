import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }
  
  getRooms(date:any) {
    return this.http.post('https://challenges.1aim.com/roombooking/getrooms', date)
      .map((res:Response) => res.json());
  }
}