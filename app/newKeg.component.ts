import { Component } from 'angular2/core';

@Component({
  selector: 'new-keg',
  template: `
    <form (submit)="createKeg(newName)">
      <label for="name">Keg Name</label><input type="text" name="name" #newName>
    </form>
  `
})
export class NewKegComponent {
  constructor(){

  }

  createKeg(newName: string) {
    
  }
}
