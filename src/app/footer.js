import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'Footer',
  moduleId: __moduleName,
  templateUrl: 'footer.html',
  providers: [HTTP_PROVIDERS]
})


export class Footer {
  constructor(http) {
    this.http = http;
    this.getProps().subscribe(result => {
      this.version = result.version;
    });
  }

  static get parameters() { // http://stackoverflow.com/questions/34800150/angular-2-es6-inject-http
    return [[Http]];
  }

  getProps() {
    return this.http
        .get('src/data/global.json')
        .map(response => response.json());
  }
}
