import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { RegisterwithreactiveComponent } from './registerwithreactive/registerwithreactive.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"technologies",component:TechnologiesComponent,children:[
    {path:"javascript",component:JavascriptComponent},
    {path:"typescript",component:TypescriptComponent},
    {path:"bootstrap",component:BootstrapComponent},
    {path:"",redirectTo:"/technologies/javascript",pathMatch:"full"}
  ]},
  {path:"registerwithreactive",component:RegisterwithreactiveComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"user-details/:id",component:UserDetailsComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  { path: 'test1', loadChildren: () => import('./test1/test1.module').then(m => m.Test1Module) },
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
