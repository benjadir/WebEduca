import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit{
  @HostBinding('attr.class') varcss="auth";

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log('implemented');
  }

}
