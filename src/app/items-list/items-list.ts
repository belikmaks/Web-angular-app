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
    // 1. ОБОВ'ЯЗКОВО викликаємо метод, який запускає HTTP GET запит
    this.dataService.getTools();

    // 2. Підписуємось на потік даних, який оновиться після відповіді сервера
    this.tools$ = this.dataService.tools$;
  }

  onToolSelected(tool: Tool) {
    console.log("Вибрано елемент:", tool.name, tool);
    alert(`Вибрали: ${tool.name} (v${tool.version})`);
  }

  onSearchChange(): void {
    // При роботі з API фільтрацію краще робити через сервіс або пайпи
    this.dataService.filterItems(this.searchTerm);
  }
}
