import { NgModule,
  Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoggedInGuard } from './logged-in.guard';

@NgModule({
  imports:      [ SharedModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [ ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}