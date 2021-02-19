import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // tslint:disable-next-line:typedef
  transform(value: number): any {
    return Math.pow(value,2);
  }

}
