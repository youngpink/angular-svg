import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './nav-menu/tabs/tabs.component';
import { TabComponent } from './nav-menu/tab/tab.component';
import { DrawComponent } from './draw/draw/draw.component';
import { Example2Component } from './example2/example2/example2.component';
import { BackgroundComponent } from './draw/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    DrawComponent,
    Example2Component,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
