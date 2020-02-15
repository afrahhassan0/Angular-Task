import { Component, OnInit } from '@angular/core';
import { RegisteringUser } from '../model/registering-user';
import { AuthApiService } from '../auth-api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeringUser: RegisteringUser;

  constructor( private auth: AuthApiService , private routeTo: Router) {
      this.registeringUser = new RegisteringUser("" , "" , "");
   }

  ngOnInit() {
  }

  register(){
    this.auth.registerUser( this.registeringUser ).subscribe(
      res=>{
        this.auth.setEmail( this.registeringUser.email );
        localStorage.setItem( 'token ', res.auth );
        this.routeTo.navigate([ '/anime-home-page' ]);
      },
      (error: HttpErrorResponse)=>{
        alert('Error registering');
      }
    )
  }

}
