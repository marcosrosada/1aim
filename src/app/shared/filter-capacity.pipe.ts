import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCapacity'
})
export class FilterCapacityPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.length === 0 || args === undefined){
      return value;
    }

    return value.filter(
      v => v.capacity == args
    );
  }
}