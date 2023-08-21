import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import emails, { EmailJSResponseStatus } from '@emailjs/browser';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,private route:Router,private service:StudentService){}

  

  studentAccess=this.fb.group({
    firstName:[null,[Validators.required,Validators.minLength(5)]],
    lastName:["",[Validators.required,Validators.minLength(5)]],
    password:["",[Validators.required,Validators.minLength(5)]],
    cpassword:["",Validators.required],
    email:["",[Validators.pattern(/@gmail.com/)]]
  });


formClick(){
  if(this.studentAccess.status=='VALID'){
    //alert("Registered sucessfully \n\n"+ JSON.stringify(this.studentAccess.value,null,4));
   
    //api parameters
    let body:any={
      firstName:this.studentAccess.controls.firstName.value,
      email:this.studentAccess.controls.email.value,
      lastName:this.studentAccess.controls.lastName.value,
      password:this.studentAccess.controls.password.value,
      cpassword:this.studentAccess.controls.cpassword.value,

    }
    this.service.postRegister(body);
    /////email
    emails.init('HXW-CW-DXs0fbO1J8');
     let response= emails.send("service_5s19kph","template_7j4av8i",{
      to_email:this.studentAccess.controls.email.value,
      from_name: "Sri Chaithanya Parayana Techno School",
      to_name: this.studentAccess.controls.firstName.value,
      subject: "Student Registration",
      message: "You have successfully regisered in Sri Chaithanya Parayana Techno School ",
      });
     alert("message has been sent..!");
    

    this.route.navigate(['/login']);
  }
      

}

}