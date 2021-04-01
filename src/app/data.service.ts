import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { getLocaleDateFormat } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    //inject Httpclient object

    constructor(private hc:HttpClient){}

    ngOnInit(): void {
    
    }
    //get data from external resource by http request
    getData():Observable<any>{
      return this.hc.get("https://jsonplaceholder.typicode.com/posts");
    }

    //get 1 obj based on id
    getOneObject(id):Observable<any>{
      return this.hc.get("https://jsonplaceholder.typicode.com/posts/"+id);

    }

    //get data from external resource by http request
    getDataFromExternalResource():Observable<any>{
      return this.hc.get("https://jsonplaceholder.typicode.com/users");
    }

    //get 1 obj based on id
    getOneObjectFromUsers(id):Observable<any>{
      return this.hc.get("https://jsonplaceholder.typicode.com/users/"+id);

    }
 }

