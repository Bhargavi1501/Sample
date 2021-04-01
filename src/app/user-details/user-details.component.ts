import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  dataObj: any;
  constructor(private ac: ActivatedRoute, private ds: DataService) { }

  ngOnInit(): void {
    
    ////Read Id value from url using ActivatedRoute object
    this.ac.params.subscribe(
      params => {
        let id = params["id"];
       // console.log("id is", id);

        //call method of DataService
        this.ds.getOneObjectFromUsers(id).subscribe(
          res => {
            this.dataObj = res;

          },
          err => {
            alert("Error in reading object");
            console.log(err);
          }
        )
      })
    }
}

