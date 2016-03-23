import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.module';

@Pipe({
  name: "LowKegPipe",
  pure: false
})
export class LowKegPipe implements PipeTransform {
  transform(input: Keg[], args) {
    if(args[0] == "low") {
      return input.filter(function(keg) {
        return keg.pints < 11;
      });
    } else return input;
  }
}
