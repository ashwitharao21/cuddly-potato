import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRecords: any = [{'fname': 'Mark', 'lname': 'Otto', 'empid': '123', 'num': 23423 }, 
                      {'fname': 'Noothan', 'lname': 'sh', 'empid': '456', 'num': 23423 },
                      {'fname': 'fdsf', 'lname': 'sh', 'empid': '897', 'num': 23423 }];


  filterTerm: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.userRecords);
    console.log(this.filterTerm);
  }

  employeeDetails(id: any){
    this.router.navigate(['/employee', id]);
  }

  // gotoEmp(){
  //   this.router.navigate(['/emp']);
  // }

}
