import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Layout } from './layout/layout';
import { ItemsListComponent} from './items-list/items-list';
import { ItemCardComponent } from './items-card/items-card';
import {FormsModule} from '@angular/forms';
import { ItemDetails } from './item-details/item-details';
import {RouterLink, RouterOutlet} from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Layout,
    ItemsListComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
