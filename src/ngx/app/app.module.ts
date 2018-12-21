import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";

import { AppComponent } from './app.component';
import { NgxComponentComponent } from './ngx-component/ngx-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxComponentComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
