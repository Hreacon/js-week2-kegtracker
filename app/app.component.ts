import { Component } from 'angular2/core';
import { Keg       } from './keg.module';
import { KegListComponent } from './kegList.component';
import { NewKegComponent } from './newKeg.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent, NewKegComponent],
  template: `
    <new-keg></new-keg>
    <keg-list [kegList]="kegs"></keg-list>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Coors"),
      new Keg("Budweiser")
    ];
  }
}
