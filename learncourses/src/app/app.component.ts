import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Subject,BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'learncourses';
  Isclicked:boolean=false;

  onFilterActivities(type: number){
    console.log(type);
  }
  ngOnInit(): void {

  }
  toggleSideBar(){

    this.Isclicked=!this.Isclicked;
    console.log('isclicked:',this.Isclicked);


  }
}
