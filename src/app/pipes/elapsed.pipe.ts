import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

console.log(moment('').fromNow());
@Pipe({
  name: 'elapsed'
})
export class ElapsedPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return moment(value).fromNow();
  }
}
