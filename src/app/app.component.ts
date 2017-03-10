import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ConfigService]
})
export class AppComponent {
  name = '';
  headline = '';
  constructor(private configService: ConfigService){}
  ngOnInit(){
    this.configService.getConfig().subscribe(cfg => {this.name = cfg.name; this.headline = cfg.headline});
  }
}
