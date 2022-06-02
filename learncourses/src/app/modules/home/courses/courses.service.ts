import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const apiurl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }

  PostArticle(arg:any):Observable<any>{
    /*segment added will be transformed as a folders in
    firebase .json is a firebase requirement */
 return this.http.post(apiurl+'posts.json',arg);
  }
  getAll():Observable<any>{
    return this.http.get(apiurl+'posts.json').pipe(map((resp:any)=>{
    const arr:{content:string,title:string,id:string}[]=[];
      for(const key in resp){
        if(resp.hasOwnProperty(key)){
         arr.push({...resp[key],id:key});
        }
      }
      return arr;
    }));
  }
  deleteAllPosts(){
   return this.http.delete(apiurl+'posts.json');
  }
}
