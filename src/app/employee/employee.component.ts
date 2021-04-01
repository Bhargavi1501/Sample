import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  searchTerm:string;
  receivedEmpDetails:any=[];
  constructor(private emp:EmployeeService) { }
  //inject data into employeeComponent

  ngOnInit(): void {
    this.receivedEmpDetails = this.emp.empDetails;
  }


}
