import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private service:StudentService,private route:Router){}
  studentAccess:any=this.fb.group({
    password:[""],
    email:[""]
  });
   
  formclick(){
    let body:any={
      email:this.studentAccess.controls.email.value,
      password:this.studentAccess.controls.password.value,
    }
    this.service.postLogin(body);
    
  }
  
}
