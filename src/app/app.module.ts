import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/:id', component: StudentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
