import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Tool } from '../models/tool.interface';

@Injectable({ providedIn: 'root' })
export class DataService {
  private allTools: Tool[] = [];
  private toolsSubject = new BehaviorSubject<Tool[]>([]);
  public tools$ = this.toolsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTools(): void {
    this.http.get<Tool[]>('/tools').pipe(
      tap(tools => {
        this.allTools = tools;
        this.toolsSubject.next(tools);
      }),
      catchError(error => {
        console.error('Помилка завантаження:', error);
        return of([]);
      })
    ).subscribe();
  }

  getToolById(id: string | number): Observable<Tool | undefined> {
    return this.http.get<Tool>(`/tools/${id}`).pipe(
      catchError(() => of(undefined))
    );
  }

  addTool(tool: any): Observable<Tool> {
    return this.http.post<Tool>('/tools', tool).pipe(
      tap(() => this.getTools()),
      catchError(error => {
        console.error('Помилка збереження:', error);
        throw error;
      })
    );
  }


  filterItems(searchTerm: string): void {
    const filtered = this.allTools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.toolsSubject.next(filtered);
  }
}

export class Data {
}
