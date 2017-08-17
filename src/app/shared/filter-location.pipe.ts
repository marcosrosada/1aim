import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLocation'
})
export class FilterLocationPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.length === 0 || args === undefined){
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(
      v => v.location.toLocaleLowerCase().includes(filter)
    );
  }
}