import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    const counter = args[1];
    for (let i = 0; i < counter; i++) {
      value += args[0];
    }
    return value;
  }

}
