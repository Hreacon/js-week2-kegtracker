import { Component, EventEmitter } from 'angular2/core';
import { IKeg } from './keg.module';

@Component({
  selector: 'new-keg',
  outputs: ['onCreateKeg'],
  template: `
    <form (submit)="createKeg(newName, newBrand, newAlcoholContent, newPrice)">
      <label for="name">Keg Name</label><input type="text" name="name" #newName>
      <label for="brand">Keg brand</label><input type="text" name="brand" #newBrand>
      <label for="alcoholContent">Alcohol Content</label><input type="number" name="AC" #newAlcoholContent>
      <label for="price">Price/Pint</label><input type="number" name="price" #newPrice>
      <input type="submit" value="Add Keg">
    </form>
  `
})
export class NewKegComponent {
  public onCreateKeg: EventEmitter<IKeg>;
  constructor(){
    this.onCreateKeg = new EventEmitter();
  }

  createKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newAlcoholContent: HTMLInputElement, newPrice: HTMLInputElement) {
    console.log("Creating a new keg " + newName.value);
    var ikeg: IKeg = {
      name: newName.value,
      brand: newBrand.value,
      alcoholContent: parseInt(newAlcoholContent.value),
      price: parseInt(newPrice.value)
    };
    newName.value = "";
    newBrand.value = "";
    newAlcoholContent.value = "";
    newPrice.value = "";
    this.onCreateKeg.emit(ikeg);
  }
}
