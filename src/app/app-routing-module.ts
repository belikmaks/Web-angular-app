import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListComponent } from './items-list/items-list';
import { ItemDetailsComponent } from './item-details/item-details';


const routes: Routes = [

  {
    path: 'items',
    component: ItemsListComponent
  },

  {
    path: 'items/:id',
    component: ItemDetailsComponent
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
