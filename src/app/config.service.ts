import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
  constructor(private http: Http) {}
  getConfig(){
    return this.http.get('/api/config').map(res => res.json())
  }
}
