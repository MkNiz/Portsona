import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ConfigService } from './config.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PagesComponent } from './pages/pages.component';

const ROUTES = [
  { path: 'page/:page_url', component: PagesComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PagesComponent
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
