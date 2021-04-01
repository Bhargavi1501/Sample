import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DetailsComponent } from './details/details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterwithreactiveComponent } from './registerwithreactive/registerwithreactive.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    TechnologiesComponent,
    PagenotfoundComponent,
    JavascriptComponent,
    TypescriptComponent,
    BootstrapComponent,
    DetailsComponent,
    UserDetailsComponent,
    SquarePipe,
    SearchPipe,
    EmployeeComponent,
    RegisterwithreactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
