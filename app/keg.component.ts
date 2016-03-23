import { Component, EventEmitter } from 'angular2/core';
import { Keg       } from './keg.module';

@Component({
  selector: 'keg-view',
  inputs: ['keg'],
  outputs: ['onEditKeg'],
  template: `
    <div class="keg" style="background:linear-gradient(white {{ keg.getFullPercent() }}%, #FBB117 {{ keg.getFullPercent() }}%)">
      <h3>{{ keg.name }}</h3>
      <h5>{{ keg.alcoholContent }}%</h5>
      <h5 class="price" style="background: {{ keg.getPriceColor() }}">{{ keg.price }}$/Pint </h5>
      <p>{{ keg.brand }} Pints left: {{ keg.pints }}</p>
      <button (click)="sellPint()">Sell a Pint</button>
      <button (click)="editKeg()">Edit</button>
    </div>
  `
})
export class KegComponent {
  public keg: Keg;
  public onEditKeg: EventEmitter<Keg>;
  constructor(){
    this.onEditKeg = new EventEmitter();
  }
  sellPint() {
    this.keg.sellPint();
  }
  editKeg() {
    this.onEditKeg.emit(this.keg);
  }
}
