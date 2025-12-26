import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListComponent } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsListComponent
  },
  // ПЕРЕНЕСЕНО СЮДИ: тепер Angular спочатку перевірить, чи це не "add"
  {
    path: 'items/add',
    component: ItemForm
  },
  {
    path: 'items/:id',
    component: ItemDetails
  },
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/items'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
