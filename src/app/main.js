import {Component} from '@angular/core';
import {Header} from './header.js';
import {Title} from './title.js';
import {Techs} from './techs/techs.js';
import {Footer} from './footer.js';

@Component({
  selector: 'App',
  moduleId: __moduleName,
  templateUrl: 'main.html',
  directives: [Header, Title, Techs, Footer]
})
export class Main {}
