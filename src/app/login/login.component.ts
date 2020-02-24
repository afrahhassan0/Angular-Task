import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthApiService } from '../auth-api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggingUser: User;

  constructor( private routeTo: Router  , private auth: AuthApiService) { 
    this.loggingUser = new User("" , "");
  }

  ngOnInit() {
  }

  login(){
    this.auth.loginUser(this.loggingUser).subscribe( 
      res=> {
        this.auth.setEmail( this.loggingUser.email );
        localStorage.setItem( 'token' , res.auth );
        this.routeTo.navigate( ['anime-home-page/1']);
      }, (error: HttpErrorResponse)=>{ 
          alert("Wrong credentials")
        
      })
  }
  

}
