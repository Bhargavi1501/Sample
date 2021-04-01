import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  empDetails: any = [
    { eno: 900, name: "vasu", age: 20, designation: "journalist", address: "chennai" },
    { eno: 1000, name: "vijay", age: 21, designation: "manager", address: "hyderabad" },
    { eno: 1100, name: "anirudh", age: 20, designation: "journalist", address: "hyderabad" },
    { eno: 1200, name: "bhavani", age: 20, designation: "manager", address: "vizag" },
    { eno: 1300, name: "manasa", age: 20, designation: "manager", address: "hyderabad" },
    { eno: 1400, name: "sneha", age: 22, designation: "journalist", address: "vijayawada" },
    { eno: 1500, name: "preethi", age: 20, designation: "staff", address: "hyderabad" },
    { eno: 1600, name: "lakshmi", age: 20, designation: "journalist", address: "hyderabad" },
    { eno: 1700, name: "kunal", age: 23, designation: "manager", address: "hyderabad" },
    { eno: 1800, name: "rajesh", age: 20, designation: "manager", address: "vizag" },
    { eno: 1900, name: "veeru", age: 20, designation: "staff", address: "hyderabad" },
    { eno: 2000, name: "gopi", age: 20, designation: "staff", address: "bangalore" },
    { eno: 2100, name: "teja", age: 20, designation: "manager", address: "hyderabad" },
  ];


  getData(){
    return this.empDetails;

  }


}
