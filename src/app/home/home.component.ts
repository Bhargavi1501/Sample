import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  idArray: any = [];
  //inject Router object 
  constructor(private ds: DataService, private rt: Router) { }


  ngOnInit(): void {
    //get data from service object
    this.ds.getDataFromExternalResource().subscribe(
      res => {
        this.idArray = res;

      },
      err => {
        alert("Something went wrong");
        console.log(err);
      })
  }
  gotoDetails(obj){
      //navigate to details page
      this.rt.navigate(["/details", obj.id]);
  }


  gotoUserDetails(obj) {
    //navigate to userdetails page
    this.rt.navigate(["/user-details", obj.id]);
  }


  name:any = "how are you";
  salary:number = 50000;
  r:number = 0.12;
  student:Object={
    sno:123,
    sname:"Ravi"
  }
  today = new Date();
  n:number= 5;
}

