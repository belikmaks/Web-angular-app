import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Layout } from './layout/layout';
import { ItemsListComponent } from './items-list/items-list';
import { ItemCardComponent } from './items-card/items-card';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';
import { TruncatePipe } from './shared/pipes/truncate-pipe';
import { HoverEffectDirective } from './shared/directives/hover-effect';

@NgModule({
  declarations: [
    App, Header, Footer, Layout,
    ItemsListComponent, ItemCardComponent, ItemDetails, ItemForm,
    TruncatePipe, HoverEffectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]
})
export class AppModule { }
