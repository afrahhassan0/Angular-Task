import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.css']
})
export class BtnGroupComponent implements OnInit {

  constructor(private routeTo: Router , private currentRoute : ActivatedRoute) { }

  ngOnInit() {
  }

  showLoginForm(){
    this.routeTo.navigate(['login'] , { relativeTo: this.currentRoute })
  }

  showRegisterForm(){
    this.routeTo.navigate( ['register'] , { relativeTo: this.currentRoute })
  }

}
