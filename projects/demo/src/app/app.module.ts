import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { PlatformNodeGuiModule } from 'platform-nodegui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PlatformNodeGuiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
