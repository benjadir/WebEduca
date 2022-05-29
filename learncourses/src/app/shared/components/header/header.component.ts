import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class HeaderComponent implements OnInit {
  title = 'learncourses';
  Isclicked:boolean=false;
  constructor() { }
  onFilterActivities(type: number){
    console.log(type);
  }

  toggleSideBar(){

    this.Isclicked=!this.Isclicked;
    console.log('isclicked:',this.Isclicked);


  }



  ngOnInit(): void {
  }

}
