import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import { PageInfo } from 'src/app/model/page-info';
import { AnimeApiService } from 'src/app/anime-api.service';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() activePage: number;
  @Output() paginationClicked = new EventEmitter<number>();

  private pageDetail: PageInfo;
  public maxNbOfPages;

  constructor( private http: AnimeApiService ) { }

  ngOnInit() {
    this.http.getNbOfPages().subscribe( res=> 
      {
        this.pageDetail = res;
        this.maxNbOfPages = Math.ceil( this.pageDetail.length / this.pageDetail.displayed );
      });
  }

  goPrevious(){
    this.activePage--;
    this.paginationClicked.emit( this.activePage );
  }

  goNext(){
    this.activePage++;
    this.paginationClicked.emit( this.activePage );
  }

}
