import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmployeeServiceService {
  private _url:string ="apidata/employeedata.json"
  constructor(private _http:Http) { }
  getEmployees(){
    // [
    //   {"id":1,"name":"charan","place":"Dallas"},
    //   {"id":2,"name":"kajdjka","place":"Dallas"},
    //   {"id":3,"name":"adadad","place":"Dallas"},
    //   {"id":4,"name":"adaadadax","place":"Dallas"},
    //   {"id":5,"name":"iaeuahjkah","place":"Dallas"},

    // ]
    return this._http.get(this._url);
  }
  

}
