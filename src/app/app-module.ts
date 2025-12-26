import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
// Імпорт HttpClientModule для виконання мережевих запитів
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Імпорт перехоплювача для додавання базового URL (Завдання 5)
import { ApiInterceptor } from './shared/interceptors/api.interceptor';

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
    App,
    Header,
    Footer,
    Layout,
    ItemsListComponent,
    ItemCardComponent,
    ItemDetails,
    ItemForm,
    TruncatePipe,
    HoverEffectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    // Додаємо HttpClientModule у масив імпортів (Завдання 3)
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Реєстрація HTTP Interceptor (Завдання 5)
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
