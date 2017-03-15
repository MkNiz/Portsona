import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ConfigService } from './config.service';
import { PagesService } from './pages.service';

import { HomepageComponent } from './homepage/homepage.component';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { AdminPagesComponent } from './admin/admin-pages/admin-pages.component';

const ROUTES = [
  { path: 'page/:page_url', component: PagesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/pages', component: AdminPagesComponent},
  { path: 'admin/settings', component: SettingsComponent},
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PagesComponent,
    AdminComponent,
    SettingsComponent,
    AdminPagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ConfigService, PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
