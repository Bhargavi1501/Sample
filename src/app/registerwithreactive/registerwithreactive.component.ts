import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-registerwithreactive',
  templateUrl: './registerwithreactive.component.html',
  styleUrls: ['./registerwithreactive.component.css']
})
export class RegisterwithreactiveComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      //username
      username: new FormControl(null,Validators.required),
      //email
      email: new FormControl(null, Validators.required),
      //name
      name:new FormControl(null),
      //gender
      gender:new FormControl(null),
      //skills
      skills:new FormControl(null),
      //aboutyourself
      aboutyourself: new FormControl(null)
    });

  }
  onSubmit(){
    console.log(this.registerForm.value);
  }

}
