import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginSubmit(ref){
    let userObj = ref.value;

    if(userObj.username!=="abcd"){
      alert("Invalid Username");
    }
    else if(userObj.password!=="abcd"){
      alert("Invalid Password");
    }
  }
  
}
