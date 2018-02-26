import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
      { path: 'home', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', redirectTo: 'about'},
      { path: 'menu', redirectTo: 'menu' },      
  	  { path: 'contact-reserve', redirectTo: 'contact-reserve'},
      { path: 'popup-wiki', redirectTo: 'popup-wiki' }   
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