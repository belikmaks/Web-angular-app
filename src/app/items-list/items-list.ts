import { Component, OnInit } from '@angular/core';
import { Tool } from '../shared/models/tool.interface';
import { Data } from '../shared/services/data';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  standalone: false

})
export class ItemsListComponent implements OnInit {

  public tools: Tool[] = [];
  public searchTerm: string = '';

  constructor(private dataService: Data) { }

  ngOnInit(): void {
    this.tools = this.dataService.getItems();
  }

  onToolSelected(tool: Tool) {
    console.log("Елемент вибрано:", tool.name, tool);
    alert(`Ви вибрали: ${tool.name} (v${tool.version})`);
  }

  get filteredTools(): Tool[] {
    if (!this.searchTerm) {
      return this.tools;
    }
    const term = this.searchTerm.toLowerCase();
    return this.tools.filter(
      tool => tool.name.toLowerCase().includes(term) ||
        tool.description.toLowerCase().includes(term)
    );
  }
}
