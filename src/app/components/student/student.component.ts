import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teacher } from 'src/app/datatypes/teacher';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 constructor(private activeroute:ActivatedRoute,private service:StudentService){};
 Null:any="";
 ngOnInit(): void {
     this.teacher;
 }
 teacher: undefined | teacher[]=
 [
  {
    imgsrc:"https://source.unsplash.com/1600x1000/?women?teacher",
    name:"Sunitha",
    subject:"Maths"
  },
  {
    imgsrc:"https://source.unsplash.com/1600x1000/?guy?teacher",
    name:"Mahesh",
    subject:"Telugu"
  },
  {
    imgsrc:"https://source.unsplash.com/1600x1000/?men?teacher",
    name:"Ramu",
    subject:"Hindi"
  },
  {
    imgsrc:"https://source.unsplash.com/1600x1000/?teacher?men",
    name:"Rahul",
    subject:"Social"
  },
  {
    imgsrc:"https://source.unsplash.com/1600x1000/?boy?teacher",
    name:"Sohail",
    subject:"Maths"
  },
  {
    imgsrc:"https://source.unsplash.com/1600x1000/?lady?teacher",
    name:"Sunitha",
    subject:"Maths"
  },
  {
    imgsrc:"https://source.unsplash.com/1600x1000/?girl?teacher",
    name:"Roja",
    subject:"Physics"
  }
];


 searchclick(input:any){
  console.log(this.Null);
  if(input == "maths" || input == "Maths" || input == "MATHS" ){
    this.teacher=[
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?women?teacher",
        name:"Sunitha",
        subject:"Maths"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?boy?teacher",
        name:"Sohail",
        subject:"Maths"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?lady?teacher",
        name:"Sunitha",
        subject:"Maths"
      }
    ];
    this.Null="";
  }
  else if(input == "telugu"  || input == "TELUGU" || input == "Telugu" ){
    this.teacher=[ {
      imgsrc:"https://source.unsplash.com/1600x1000/?guy?teacher",
      name:"Mahesh",
      subject:"Telugu"
    }]
    this.Null="";
  }
  else if(input == "hindi" || input == "Hindi" || input == "HINDI" ){
   this.teacher=[
    {
      imgsrc:"https://source.unsplash.com/1600x1000/?men?teacher",
      name:"Ramu",
      subject:"Hindi"
    }
   ]
   this.Null="";
  }
  else if(input == "physics" || input == "Physics" || input == "PHYSICS" ){
    this.teacher=[
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?girl?teache",
        name:"Roja",
        subject:"Physics"
      }]
      this.Null="";
  }
  else if(input == "social" || input == "Social" || input == "SOCIAL" ){
    this.teacher=[
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?teacher?men",
        name:"Rahul",
        subject:"Social"
      }]
      this.Null="";
  }
  else{
    this.Null="not found.!";
    this.teacher=[
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?women?teacher",
        name:"Sunitha",
        subject:"Maths"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?guy?teacher",
        name:"Mahesh",
        subject:"Telugu"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?men?teacher",
        name:"Ramu",
        subject:"Hindi"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?teacher?men",
        name:"Rahul",
        subject:"Social"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?boy?teacher",
        name:"Sohail",
        subject:"Maths"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?lady?teacher",
        name:"Sunitha",
        subject:"Maths"
      },
      {
        imgsrc:"https://source.unsplash.com/1600x1000/?girl?teacher",
        name:"Roja",
        subject:"Physics"
      }
    ]
}
}

}
