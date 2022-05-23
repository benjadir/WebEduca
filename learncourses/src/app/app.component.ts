import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learncourses';
  Isclicked:boolean=true;

  onFilterActivities(type: number){
    console.log(type);
  }
  toggleSideBar(){
    this.Isclicked=!this.Isclicked;
  }
}
