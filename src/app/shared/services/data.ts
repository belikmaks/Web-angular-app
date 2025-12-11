import { Injectable } from '@angular/core';
import { Tool } from '../models/tool.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private tools: Tool[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Google\'s powerful framework for large applications.',
      version: '20.0.0',
      type: 'framework',
      isPopular: true,
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1ZDfkW9yaV5R8Ej89Pvgdmvl-ZIkioyBEA&s',
      detailedDescription: 'Angular є повноцінною фронтенд-платформою, що базується на TypeScript. Ідеально підходить для розробки складних, масштабованих корпоративних рішень (SPA).',
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
      detailedDescription: 'TypeScript додає статичну типізацію до JavaScript, що значно підвищує якість коду та його підтримку, особливо у великих проєктах. Це стандарт для Angular.',
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
      detailedDescription: 'Visual Studio Code – це безкоштовний редактор коду з відкритим вихідним кодом, який підтримує налагодження, вбудований Git та велику екосистему розширень.',
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
      detailedDescription: 'RxJS використовується для асинхронної композиції програм, обробляючи потоки даних за допомогою Observable послідовностей та операторів.',
      documentationUrl: 'https://rxjs.dev/guide/overview',
      creator: 'Ben Lesh',
      communityRating: 4.1,
      releaseYear: 2016
    }
  ];

  constructor() { }

  getItems(): Tool[] {
    return this.tools;
  }
}

export class Data {
}
