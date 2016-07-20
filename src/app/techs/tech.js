import {Component, Input} from '@angular/core';

@Component({
  selector: 'Tech',
  moduleId: __moduleName,
  templateUrl: 'tech.html'
})
export class Tech {
  @Input() tech;
}
