import { Component } from 'angular2/core';
import { Keg       } from './keg.module';

@Component({
  selector: 'keg-view',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}</h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
