import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  initialSubscriber: any;
  fid: number;
  title: string;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initialSubscriber = this.route.params.subscribe(data=>{
      this.fid = Number(data.id);
    });

    if(this.fid === 1){
      this.title = "Employee";
    }else if(this.fid === 2){
      this.title = "Student";
    }

  }

}
