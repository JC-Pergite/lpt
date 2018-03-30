import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser-dynamic';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.module.ngfactory';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory, {enableLegacyTemplate: false});
