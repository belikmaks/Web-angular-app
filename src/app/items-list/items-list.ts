import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tool } from '../shared/models/tool.interface';
import { DataService } from '../shared/services/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  standalone: false
})
export class ItemsListComponent implements OnInit, OnDestroy {

  private toolsSubscription!: Subscription;
  public tools: Tool[] = [];
  public searchTerm: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.toolsSubscription = this.dataService.tools$.subscribe(
      (data: Tool[]) => {
        this.tools = data;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.toolsSubscription) {
      this.toolsSubscription.unsubscribe();
    }
  }


  onToolSelected(tool: Tool) {
    console.log("Вибрано елемент:", tool.name, tool);
    alert(`Вибрали: ${tool.name} (v${tool.version})`);
  }

  onSearchChange(): void {
    this.dataService.filterItems(this.searchTerm);
  }

  get filteredTools(): Tool[] {
    return this.tools;
  }
}
