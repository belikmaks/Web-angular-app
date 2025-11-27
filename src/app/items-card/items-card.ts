import { Component, Input } from '@angular/core';
import { Tool } from '../shared/models/tool.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './items-card.html',
  styleUrls: [`./items-card.css`],
  standalone: false
})
export class ItemsCardComponent {
  @Input() tool!: Tool;
}
