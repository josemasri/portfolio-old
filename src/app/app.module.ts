import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
