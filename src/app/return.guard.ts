import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ReturnGuard implements CanActivate {
  constructor(private auth: AuthApiService , private routeTo: Router){}

  canActivate(){    
      if(! this.auth.loggedIn )  return true;

      this.routeTo.navigate( [ '/anime-home-page' ] );
      return false;
  }
  
}
