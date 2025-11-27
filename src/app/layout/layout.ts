import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: `
    <div class="layout-container">

      <app-header></app-header>

      <main class="content-area">
        <app-items-list></app-items-list>
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>

    </div>
  `,
  styleUrls: ['./layout.css'],
})
export class Layout {

}
