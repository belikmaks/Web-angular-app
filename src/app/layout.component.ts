import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: false
})
export class LayoutComponent {
  header_title = 'Web Development';
  footer_title = 'Footer of the website';
}

