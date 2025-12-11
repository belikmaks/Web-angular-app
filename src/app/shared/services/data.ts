import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Tool } from '../models/tool.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private originalTools: Tool[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Google\'s powerful framework for large applications.',
      version: '20.0.0',
      type: 'framework',
      isPopular: true,
      logoUrl: 'data:image/jpeg;base64,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',
      detailedDescription: 'Angular is a comprehensive front-end platform based on TypeScript. It is ideal for developing complex, scalable enterprise solutions (SPAs).',
      documentationUrl: 'https://angular.io/docs',
      creator: 'Google',
      communityRating: 4.5,
      releaseYear: 2016
    },
    {
      id: 2,
      name: 'TypeScript',
      description: 'Typed superset of JavaScript that compiles to plain JavaScript.',
      version: '5.0',
      type: 'language',
      isPopular: true,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/80px-Typescript_logo_2020.svg.png',
      detailedDescription: 'TypeScript adds static typing to JavaScript, significantly improving code quality and maintainability, especially in large projects. It is the standard for Angular.',
      documentationUrl: 'https://www.typescriptlang.org/docs',
      creator: 'Microsoft',
      communityRating: 4.8,
      releaseYear: 2012
    },
    {
      id: 3,
      name: 'VS Code',
      description: 'The most popular source code editor, extensible and lightweight.',
      version: '1.95',
      type: 'tool',
      isPopular: true,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/80px-Visual_Studio_Code_1.35_icon.svg.png',
      detailedDescription: 'Visual Studio Code is a free, open-source code editor that supports debugging, integrated Git control, and a large ecosystem of extensions.',
      documentationUrl: 'https://code.visualstudio.com/docs',
      creator: 'Microsoft',
      communityRating: 4.9,
      releaseYear: 2015
    },
    {
      id: 4,
      name: 'RxJS',
      description: 'A library for reactive programming using observables.',
      version: '7.8.0',
      type: 'library',
      isPopular: false,
      logoUrl: 'https://rxjs.dev/assets/images/logos/Rx_Logo_S.png',
      detailedDescription: 'RxJS is used for asynchronous program composition, handling data streams via Observable sequences and operators.',
      documentationUrl: 'https://rxjs.dev/guide/overview',
      creator: 'Ben Lesh',
      communityRating: 4.1,
      releaseYear: 2016
    }
  ];

  private toolsSubject = new BehaviorSubject<Tool[]>(this.originalTools);

  public tools$ = this.toolsSubject.asObservable();

  constructor() { }

  getItems(): Observable<Tool[]> {
    return of(this.originalTools);
  }


  filterItems(term: string): void {
    if (!term) {
      this.toolsSubject.next(this.originalTools);
      return;
    }

    const lowerTerm = term.toLowerCase();

    const filtered = this.originalTools.filter(
      tool => tool.name.toLowerCase().includes(lowerTerm) ||
        tool.description.toLowerCase().includes(lowerTerm)
    );

    this.toolsSubject.next(filtered);
  }

  getToolById(id: number): Observable<Tool | undefined> {
    const tool = this.originalTools.find(t => t.id === id);
    return of(tool);
  }

}

export class Data {
}
