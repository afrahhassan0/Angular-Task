import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate } from '@angular/router';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private routeTo: Router , private auth: AuthApiService ){}

  canActivate()
   {
     console.log(this.auth.loggedIn())
     if( this.auth.loggedIn() )
      return true;
    
      this.routeTo.navigate(['/welcome/login']);
      return false;
  }

 
}
