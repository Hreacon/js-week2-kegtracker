import { Component, EventEmitter } from 'angular2/core';
import { Keg                     } from './keg.module';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  outputs: ['onCloseForm'],
  template: `
    <div class="editForm">
      <label for="name">Keg Name</label><input type="text" [(ngModel)]="keg.name">
      <label for="brand">Keg brand</label><input type="text" [(ngModel)]="keg.brand">
      <label for="alcoholContent">Alcohol Content</label><input type="number" [(ngModel)]="keg.alcoholContent">
      <label for="price">Price/Pint</label><input min="0" type="number" [(ngModel)]="keg.price">
      <label for="pints">Pint Level</label><input type="number" min="0" max="124" [(ngModel)]="keg.pints">
      <button (click)="closeForm()">Save Keg</button>
    </div>
  `
})
export class EditKegComponent {
  public keg: Keg;
  public onCloseForm: EventEmitter<Object>;
  constructor() {
    this.onCloseForm = new EventEmitter();
  }
  closeForm() {
    this.onCloseForm.emit(new Object());
  }
}
