import { Component, OnInit } from '@angular/core'; // Видалено OnDestroy
import { Tool } from '../shared/models/tool.interface';
import { DataService } from '../shared/services/data';
import { Observable } from 'rxjs'; // Видалено Subscription

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  standalone: false
})
export class ItemsListComponent implements OnInit {

  // Завдання 3: Дані тепер зберігаються як Observable
  public tools$!: Observable<Tool[]>;
  public searchTerm: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tools$ = this.dataService.tools$;
  }

  onToolSelected(tool: Tool) {
    console.log("Вибрано елемент:", tool.name, tool);
    alert(`Вибрали: ${tool.name} (v${tool.version})`);
  }

  onSearchChange(): void {
    this.dataService.filterItems(this.searchTerm);
  }

}
