import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegisteringUser } from './model/registering-user';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
 private loginUrl: string = 'http://localhost:3000/users/login';
 private registerUrl: string = 'http://localhost:3000/users/register';
 private userEmail: string;

 constructor( private http: HttpClient ) { }

 setEmail(email: string){
   this.userEmail = email;
 }
 

 loginUser( user: User ):Observable<any>{
   return this.http.post<Observable<any>>( this.loginUrl , user ).pipe(
     catchError( ()=> throwError ("Error") )
   );
 }

 loggedIn(){
   return !!localStorage.getItem('token');
 }

 registerUser( user: RegisteringUser ):Observable<any>{
   return this.http.post<Observable<any>>( this.registerUrl , user ).pipe(
     catchError( ()=> throwError ("error registering"))
   )
 }

}
