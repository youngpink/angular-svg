import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './nav-menu/tabs/tabs.component';
import { TabComponent } from './nav-menu/tab/tab.component';
import { Example1Component } from './example1/example1/example1.component';
import { Example2Component } from './example2/example2/example2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    Example1Component,
    Example2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
