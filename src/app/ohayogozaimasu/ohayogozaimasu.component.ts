import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ohayogozaimasu',
  templateUrl: './ohayogozaimasu.component.html',
  styleUrls: ['./ohayogozaimasu.component.css']
})
export class OhayogozaimasuComponent implements OnInit {
  

  constructor(private currentRoute: ActivatedRoute , private routeTo: Router ) { }

  ngOnInit() {
    
  }

 
}
