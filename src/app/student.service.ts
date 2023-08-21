import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient, private route:Router) { }
  postRegister(body:string){
    this.http.post('https://pramods-gitspace-registrationbackend.onrender.com/register',body,{responseType:'text'}).subscribe(
      (res:any) => {
        alert("registered successfully!");
      }
    );
  }
  postLogin(body:any){
    this.http.post('https://pramods-gitspace-registrationbackend.onrender.com/login',body).subscribe(
      (res:any) => {
        if(res.message === "validation successful"){
          alert("Login successfull");
          this.route.navigate(['/student']);
        }
        else if(res.message === "Invalid password"){
            alert("Invalid password");
        }
        else{
            alert("Invalid email and password..!");
        }
      }
    );
  }
}
