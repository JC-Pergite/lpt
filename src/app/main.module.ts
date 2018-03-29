import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { mainRouting } from './main.routing';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { MenuService } from './menu/menu.service';
import { ClickifyPipe } from './menu/clickify.pipe';
import { PopupWikiService } from './wiki/popup-wiki.service';
import { PopupPicsComponent } from './menu/popup-pics.component';

@NgModule ({
	imports: [ SharedModule, mainRouting ], 
	declarations: [ 
					AboutComponent,
					MenuComponent,
					ContactComponent,
					ClickifyPipe
				  ],
	providers: [ MenuService, PopupWikiService, PopupPicsComponent ]
})
export class MainModule { }