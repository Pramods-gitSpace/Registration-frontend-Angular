import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'student',component:StudentComponent},
  {path:'students',component:StudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
