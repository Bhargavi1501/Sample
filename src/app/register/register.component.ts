import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users=[];
  userModal = new User();
  changeStatus:boolean = false;
  
  constructor(){}

  
  onSubmit(){

    let newObj = new User();

    newObj = {...this.userModal};

    this.users.push(newObj);
    console.log(this.users);
  }
  delete(ind){
    this.users.splice(ind,1);
  }

  edit(){
    this.changeStatus = true;
    
  }
  //changeStatus= false;

}


class User{
  public name:string;
  public email:string;
  public username:string;
  public password:string;

}