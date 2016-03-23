import { Component    } from 'angular2/core';
import { Keg          } from './keg.module';
import { KegComponent } from './keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent],
  template: `
    <keg-view *ngFor="#currentKeg of kegList" [keg]="currentKeg"></keg-view>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  constructor() {

  }
}
