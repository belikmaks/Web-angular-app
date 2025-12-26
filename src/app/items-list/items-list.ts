import { Component, OnInit } from '@angular/core';
import { Tool } from '../shared/models/tool.interface';
import { DataService } from '../shared/services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
  standalone: false
})
export class ItemsListComponent implements OnInit {

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
