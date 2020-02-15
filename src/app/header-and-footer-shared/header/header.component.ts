import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routeTo: Router) { }

  ngOnInit() {
  }

  logOutUser(){
    console.log("Loggingg out");
    localStorage.removeItem('token');
    this.routeTo.navigate( [ '/welcome' ] );
  }

  goHome(){
    this.routeTo.navigate( [ '/anime-home-page' ] )
  }
}
