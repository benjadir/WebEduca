import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCustomFabars]'
})
export class CustomFabarsDirective implements OnInit,AfterViewInit{
  @Input('appCustomFabars') appCustomFabars!:HTMLDivElement;
  @Input('CssEnter') cssClE:string='';
  @Input('CssLeave') cssClL:string='';


  constructor(private Elemref:ElementRef,private renderer:Renderer2) { }
  ngAfterViewInit(): void {
   // this.renderer.addClass(this.appCustomFabars,this.cssClL);
   this.renderer.listen(this.Elemref.nativeElement,'click',()=>{
     if(this.appCustomFabars.classList.contains(this.cssClE)){
      this.renderer.addClass(this.appCustomFabars,this.cssClL);
      this.renderer.removeClass(this.appCustomFabars,this.cssClE);

     }else{
      this.renderer.addClass(this.appCustomFabars,this.cssClE);
      this.renderer.removeClass(this.appCustomFabars,this.cssClL);
     }

   });
   this.renderer.listen(this.appCustomFabars,'mouseleave',()=>{
    this.renderer.addClass(this.appCustomFabars,this.cssClL);
    this.renderer.removeClass(this.appCustomFabars,this.cssClE);
   })
  }
  ngOnInit(): void {
    this.renderer.addClass(this.appCustomFabars,this.cssClL);
  }



}
