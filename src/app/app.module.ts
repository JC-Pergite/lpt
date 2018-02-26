import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
//Third-Party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
//Feature Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main.module';
import { MenuDataService } from './menu-data.service';
import { PopupWikiComponent } from './wiki/popup-wiki.component';

@NgModule({
  declarations: [ AppComponent, PopupWikiComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(MenuDataService),
    MainModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }