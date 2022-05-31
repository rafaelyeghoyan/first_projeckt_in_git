import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerUpperCase'
})
export class LowerUpperCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
