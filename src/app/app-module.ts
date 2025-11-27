import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Layout } from './layout/layout';
import { ItemsListComponent} from './items-list/items-list';
import { ItemsCardComponent } from './items-card/items-card';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Layout,
    ItemsListComponent,
    ItemsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
