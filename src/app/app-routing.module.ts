import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PopupWikiComponent } from './wiki/popup-wiki.component';
import { PopupPicsComponent } from './menu/popup-pics.component';

const appRoutes: Routes = [
      { path: 'viewDish', component: PopupPicsComponent, outlet: 'dishPopup' },
      { path: 'wikiSearch', component: PopupWikiComponent, outlet: 'wikiPopup' },
      { path: 'home', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', redirectTo: 'about'},
      { path: 'menu', redirectTo: 'menu', pathMatch: 'full' },      
  	  { path: 'contact-reserve', redirectTo: 'contact-reserve'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}