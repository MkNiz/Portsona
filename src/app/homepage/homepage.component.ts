import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  name = '';
  content = '';
  subpages = [];
  constructor(private pagesService: PagesService){}
  ngOnInit() {
    this.pagesService.getHomepage().subscribe(pg => {
      this.name = pg.name || "";
      this.content = pg.content || "Homepage is not set";
      this.subpages = pg.subpages || [];
    });
  }
}
