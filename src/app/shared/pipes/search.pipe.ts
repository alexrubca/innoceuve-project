import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform<T>(items: Array<T>, item: string, value: string): Array<T> {
    value = value ? value : '';

    if (!items || !item) {
      return [];
    } else {
      return items.filter(it => it[item] && it[item].indexOf(value) > -1);
    }
  }
}
