import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Layout } from './layout/layout';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Layout
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
