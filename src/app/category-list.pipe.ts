import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'categoryList',
  pure: true
})
export class CategoryListPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): string {
    const producers: any[] = [];
    value.forEach(mediaItem => {
      if (producers.indexOf(mediaItem.producer) <= -1) {
        producers.push(mediaItem.producer);
      }
    });

    return producers.join(', ');
  }

}
