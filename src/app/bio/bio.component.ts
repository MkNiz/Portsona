import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.sass'],
  providers: [ConfigService]
})
export class BioComponent implements OnInit {
  bio = '';
  constructor(private configService: ConfigService){}

  ngOnInit() {
    this.configService.getConfig().subscribe(cfg => this.bio = cfg.bio);
  }

}
