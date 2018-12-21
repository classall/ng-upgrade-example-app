import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { NgxComponentComponent } from './ngx-component/ngx-component.component';

declare var angular: any;
angular.module('ng1App')
  .directive(
    'ngxComponent',
    downgradeComponent({ component: NgxComponentComponent })
  );

@NgModule({
  declarations: [
    AppComponent,
    NgxComponentComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [NgxComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
