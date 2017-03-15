import { Component, OnInit } from '@angular/core';
import { Setting } from './setting.interface';

@Component({
  moduleId: module.id,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  public setting: Setting;

  constructor() { }

  ngOnInit() {
    this.setting = {
      name: '',
      headline: ''
    };
  }

  save(model: Setting, isValid: boolean){
    console.log(model, isValid);
  }

}
