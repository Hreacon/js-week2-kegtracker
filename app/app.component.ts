import { Component        } from 'angular2/core';
import { Keg, IKeg        } from './keg.module';
import { KegListComponent } from './kegList.component';
import { NewKegComponent  } from './newKeg.component';
import { HeaderComponent  } from './header.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent, NewKegComponent, HeaderComponent],
  template: `
    <header-view></header-view>
    <new-keg (onCreateKeg)="addKeg($event)"></new-keg>
    <keg-list [kegList]="kegs"></keg-list>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Coors Keg", "Coors", 8, 4.00),
      new Keg("Budweiser Keg", "Budweiser", 9, 6.00),
      new Keg("Bud Light Keg", "Bud Light", 6, 3.00)
    ];
  }
  addKeg(kegData: IKeg) {
    this.kegs.push(
      new Keg(kegData.name, kegData.brand, kegData.alcoholContent, kegData.price)
    );
  }
}
