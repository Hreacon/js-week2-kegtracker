export class Keg
{
  public pints: number = 124;
  constructor(public name: string, public brand: string, public alcoholContent: number, public price: number)
  {

  }
  getFullPercent() {
    return 100 - this.pints/124 * 100;
  }
  sellPint() {
    if(this.pints > 0) {
      this.pints--;
    }
  }
  getPriceColor() {
    if( this.price > 5 ) {
      return "red";
    } else if( this.price < 5 ) {
      return "white";
    } else if( this.price === 5 ) {
      return "yellow";
    }
  }
}

export interface IKeg {
  name: string;
  brand: string;
  alcoholContent: number;
  price: number;
}
