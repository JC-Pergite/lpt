import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
//Third-Party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//Feature Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuDataService } from './menu-data.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [ AppComponent, AboutComponent, HomeComponent, ContactComponent, MenuComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(MenuDataService),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }