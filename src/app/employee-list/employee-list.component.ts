import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  template: `<ul *ngFor= "let employee of employees">
              <li>{{employee.name}} {{employee.id}}</li>
              </ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   Employees:any =[];  
  constructor(private _empService:EmployeeServiceService) { }

  ngOnInit() {
    this.Employees =this._empService.getEmployees();
  }

}
