import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

const mainRoutes: Routes = [
	{ path: '', redirectTo: 'menu', pathMatch: 'full'},		
	{ path: 'menu', component: MenuComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact-reserve', component: ContactComponent }
];

export const mainRouting: ModuleWithProviders =
RouterModule.forChild(mainRoutes)