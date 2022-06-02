
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface authResponse{
  kind:string,
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  //https://identitytoolkit.googleapis.com/v1/accounts:s?key=[API_KEY]
  // you can fine ?key=[API_KEY] in firebase setting->project setting>web api key
  authurl=environment.authupUrl;
  authinurl=environment.authInUrl;

  constructor(private http:HttpClient) {

   }

   signUp(email:string,password:string){
      return this.http.post <Observable<authResponse>>(this.authurl+'?key=AIzaSyCP_ToaKwaYaMoBww2YDvqVzGEYN927jKw',{
       email:email,
       password:password,
       returnSecureToken:true,
       registered:Boolean
     });

   }

   login(email:string,password:string){
    return this.http.post <Observable<authResponse>>(this.authinurl+'?key=AIzaSyCP_ToaKwaYaMoBww2YDvqVzGEYN927jKw',{
     email:email,
     password:password,
     returnSecureToken:true
   });

 }
}
