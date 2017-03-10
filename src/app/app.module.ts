import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';

import { ConfigService } from './config.service';

const ROUTES = [
  {
    path: '',
    component: BioComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
