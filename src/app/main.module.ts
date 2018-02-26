import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { mainRouting } from './main.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { MenuService } from './menu/menu.service';
import { ClickifyPipe } from './menu/clickify.pipe';
import { PopupWikiService } from './wiki/popup-wiki.service';


@NgModule ({
	imports: [ SharedModule, mainRouting ], 
	declarations: [ 
					HomeComponent,
					AboutComponent,
					MenuComponent,
					ContactComponent,
					ClickifyPipe
				  ],
	providers: [ MenuService, PopupWikiService ]
})
export class MainModule { }