import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dataObj: any;
  //inject ActivatedRoute service
  constructor(private ac: ActivatedRoute, private ds: DataService) { }

  ngOnInit(): void {

    ////Read Id value from url using activated route object
    this.ac.params.subscribe(
      params => {
        let id = params["id"];
       // console.log("id is", id);

        //call method of DataService
        this.ds.getOneObject(id).subscribe(
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
