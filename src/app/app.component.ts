import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-reg_withnode';
  constructor(private service:StudentService){
    
  }
  showmainpage:boolean=true;
  
}
