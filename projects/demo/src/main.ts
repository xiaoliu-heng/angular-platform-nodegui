import { enableProdMode } from '@angular/core';
import { platformNodeGuiDynamic } from 'platform-nodegui';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformNodeGuiDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
