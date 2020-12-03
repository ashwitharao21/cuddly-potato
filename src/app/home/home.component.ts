import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlserviceService } from '../urlservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  


  employee: boolean = true;
  userRecord: any;
  _url:any;

  constructor(private router: Router,
    private url: UrlserviceService ) { }

  ngOnInit(): void {
    this.userRecord = this.url.noothan;
    this._url = this.url.url
    console.log(this.url.noothan);
    console.log(this.url.url);
    // console.log(this.noothan[1].lname);
    // console.log(this.noothan.length);
  }

  hide(){
    this.employee = false;
  }

  employeeDetails(id: any){
    
    this.router.navigate(['/employee', id]);
  }

  // gotoEmp(){
  //   this.router.navigate(['/emp']);
  // }

}
