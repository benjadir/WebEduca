import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
@Directive({
  selector: '[appCustomFabars]'
})
export class CustomFabarsDirective implements OnInit,AfterViewInit,OnDestroy{
  @Input('appCustomFabars') appCustomFabars!:HTMLDivElement;
  @Input('CssEnter') cssClE:string='';
  @Input('CssLeave') cssClL:string='';
  subscription!:any;
  constructor(private Elemref:ElementRef,private renderer:Renderer2) { }
  ngOnDestroy(): void {
this.subscription.unsubscribe();
  }
  ngAfterViewInit(): void {
   this.subscription=this.renderer.listen(this.Elemref.nativeElement,'click',()=>{
     if(this.appCustomFabars.classList.contains(this.cssClE)){
      this.renderer.addClass(this.appCustomFabars,this.cssClL);
      this.renderer.removeClass(this.appCustomFabars,this.cssClE);

     }else{
      this.renderer.addClass(this.appCustomFabars,this.cssClE);
      this.renderer.removeClass(this.appCustomFabars,this.cssClL);
     }

   });
   this.subscription=this.renderer.listen(this.appCustomFabars,'mouseleave',()=>{
    this.renderer.addClass(this.appCustomFabars,this.cssClL);
    this.renderer.removeClass(this.appCustomFabars,this.cssClE);
   })
  }
  ngOnInit(): void {
    this.renderer.addClass(this.appCustomFabars,this.cssClL);
  }



}
