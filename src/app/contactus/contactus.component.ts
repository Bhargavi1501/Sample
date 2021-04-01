import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { DataService } from '../data.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  searchTerm:string;
  p;
  idArray: any = [];
  //inject Router object 
  constructor(private ds: DataService, private rt: Router) { }

  ngOnInit(): void {
    //get data from service object
    this.ds.getData().subscribe(
      res => {
        this.idArray = res;
      },
      err => {
        alert("Something went wrong");
        console.log(err);
      })
  }
  gotoDetails(obj) {
    //navigate to details page
    this.rt.navigate(["/details", obj.id]);
  }

}
