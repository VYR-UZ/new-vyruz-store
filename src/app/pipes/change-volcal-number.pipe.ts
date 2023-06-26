import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeVolcalNumber'
})
export class ChangeVolcalNumberPipe implements PipeTransform {

  transform(value: string): string {

    interface Vocales{
      [x: string]: string;
    }

    const vocales: Vocales ={
      a: '@',
      e: '3',
      i: '1',
      o: '0',
      u: '|_|'
    };

    return value.split('')
      .map((word: string) => (word in vocales) ? vocales[word]: word).join('');
  }

}
