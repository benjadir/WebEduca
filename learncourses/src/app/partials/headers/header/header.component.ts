import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject,BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  Isclicked:boolean=false;
  clickedHere:{button1:boolean,button2:boolean}={button1:false,button2:false};

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.Isclicked=!this.Isclicked;
    console.log('isclicked:',this.Isclicked);
  }
  redirectReq(para:string){
    console.log('start:::',para);
    if(para==='login'){
      this.clickedHere.button1=true;
      this.clickedHere.button2=false;
    }else{
      this.clickedHere.button1=false;
      this.clickedHere.button2=true;
    }
this.router.navigate(['/auth/'+para]);


  }

}
