import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PagesService {
  constructor(private http: Http) {}
  getAllPages(){
    return this.http.get('/api/pages').map(res => res.json());
  }
  getPage(page_url){
    return this.http.get(`/api/page/${page_url}`).map(res => res.json());
  }
  getHomepage(){
    return this.http.get('/api/homepage').map(res => res.json());
  }
}
