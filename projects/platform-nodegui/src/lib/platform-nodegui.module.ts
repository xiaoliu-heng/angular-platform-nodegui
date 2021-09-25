import {NgModule, ApplicationModule, RendererFactory2, ErrorHandler} from '@angular/core';
import {NodeGuiRendererFactory} from "./platform-nodegui.render";
import {PlatformNodeGuiErrorHandler} from "./platform-nodegui.error-handler";
import {MainWindow} from "./platform-nodegui.window";


@NgModule({
  exports: [ApplicationModule],
  providers: [
    MainWindow,
    { provide: RendererFactory2, useClass: NodeGuiRendererFactory, deps: [MainWindow] },
    { provide: ErrorHandler, useClass: PlatformNodeGuiErrorHandler },
  ],
})
export class PlatformNodeGuiModule { }
