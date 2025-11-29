import { Injectable } from '@angular/core';
import {Tool} from '../models/tool.interface';

@Injectable({
  providedIn: 'root',
})
export class Data {

  private tools: Tool[] = [
    { id: 1, name: 'Angular', description: 'Google\'s powerful framework for large applications.', version: '20.0.0', type: 'framework', isPopular: true },
    { id: 2, name: 'TypeScript', description: 'Adds static types to JavaScript for better scalability.', version: '5.0', type: 'language', isPopular: true },
    { id: 3, name: 'VS Code', description: 'The most popular source code editor developed by Microsoft.', version: '1.95', type: 'tool', isPopular: true },
    { id: 4, name: 'RxJS', description: 'A library for reactive programming using observables.', version: '7.8.0', type: 'library', isPopular: true }
  ];

  getItems(): Tool[] {
    return this.tools;
  }
}
