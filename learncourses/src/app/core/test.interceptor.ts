import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(':::the request is in it way to us:::');
    const modifiedReq=request.clone({headers:request.headers.append('auth','my_token_value')});
    //to handle response will add pipe to :return next.handle(modifiedReq); bellow
    return next.handle(modifiedReq).pipe(tap(event=>{
      console.log('Int event response=>',event);
      if(event.type===HttpEventType.Response){
        console.log('Response Arrived body data');
        console.log('event.body:',event.body);
      }
    }));
  }
}
