import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tool } from '../shared/models/tool.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './items-card.html',
  styleUrls: ['./items-card.css'],
  standalone: false
})
export class ItemCardComponent {

  @Input() tool!: Tool;

  @Output() selectTool = new EventEmitter<Tool>();

  onSelect() {
    this.selectTool.emit(this.tool);
  }
}
