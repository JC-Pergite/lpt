import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

const mainRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'menu', component: MenuComponent },
	{ path: 'contact-reserve', component: ContactComponent }		
];

export const mainRouting: ModuleWithProviders =
RouterModule.forChild(mainRoutes)