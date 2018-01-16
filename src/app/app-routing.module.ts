import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
      { path: 'home', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', redirectTo: 'about', pathMatch: 'full' },
      { path: 'menu', redirectTo: 'menu', pathMatch: 'full' },      
  	  { path: 'contact-reserve', redirectTo: 'contact-reserve', pathMatch: 'full' },
      { path: 'popup-wiki', redirectTo: 'popup-wiki', pathMatch: 'full' }   
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}